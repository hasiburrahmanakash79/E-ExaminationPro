import jsPDF from 'jspdf';
import { useState } from 'react';

const PdfConverter = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const convertToPDF = () => {
    const pdf = new jsPDF();
    let yOffset = 0;

    selectedImages.forEach((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = () => {
        const imgData = reader.result;
        pdf.addImage(imgData, 'JPEG', 10, yOffset, 190, 150);
        yOffset += 150;
        if (yOffset >= pdf.internal.pageSize.getHeight()) {
          pdf.addPage();
          yOffset = 0;
        }

        if (selectedImages.indexOf(image) === selectedImages.length - 1) {
          pdf.save('images.pdf');
        }
      };
    });
  };

  return (
    <div>
      <h2>Image to PDF Converter</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button onClick={convertToPDF} disabled={selectedImages.length === 0}>
        Convert to PDF
      </button>
    </div>
  );
};

export default PdfConverter;
