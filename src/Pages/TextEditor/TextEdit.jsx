import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import "./TextEdit.css"

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"]
  ]
}


const TextEdit = () => {
  const [value, setValue] = useState("");

  const handlerInput = (content) => {
    // const text = content.target.value;
    setValue(content)
    console.log(content);
  }
  return (
    <>
      {/* saiful code start  */}
      <div className="bg-[#5a386e] lg:w-4/5 mx-auto p-3 rounded-md">
        <ReactQuill theme="snow" value={value}
          onChange={setValue}
          className="bg-white w-full h-64 rounded-md"
          modules={modules}
        />
        <div className="mt-2">
          <button onClick={() => handlerInput(value)} className="bg-orange-600 py-2 px-6 rounded-md text-lg font-medium text-white tracking-wide">Ans Submit</button>
        </div>
      </div>
      {/* saiful code end  */}
    </>
  );
};

export default TextEdit;