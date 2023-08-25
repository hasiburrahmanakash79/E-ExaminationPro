
const SubjectComponent = ({subject}) => {

    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
          <div className="">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={subject?.image}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-10 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-2xl font-semibold text-white group-hover:italic">
              {subject?.subject}
            </h1>
            <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit.
            </p>
            <div className="flex text-white text-xl gap-5 mt-5 md:mt-10">
              <a href="#" target="_blank" rel="noreferrer">
                <button className="btn btn-sm btn-primary">View</button>
              </a>
            </div>
          </div>
        </div>
    );
};

export default SubjectComponent;