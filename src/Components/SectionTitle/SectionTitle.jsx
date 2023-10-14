const SectionTitle = ({ title, subTitle }) => {
    return (
      <div className="text-center md:w-1/4 mx-auto border-b-4  mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold py-2">{title}</h2>
        <p className="text-yellow-500 py-2">{subTitle}</p>
      </div>
    );
  };
  export default SectionTitle;