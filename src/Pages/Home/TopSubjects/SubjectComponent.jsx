import { Link } from "react-router-dom";

const SubjectComponent = ({ subject }) => {
  //console.log(subject?.subject)
  return (
    <div className="card  h-[280px] shadow-xl image-full">
      <div className="img "></div>
      <div className="h1">
        <h1 className="text-4xl text-white ">{subject.subject_name}</h1>
      </div>
      <figure>
        <img
          className="object-fill w-full"
          src={subject.img_link}
          alt="Shoes"
        />
      </figure>
      <div className="items-center w-full text-center card-body1">
        <h1 className="text-4xl font-bold">{subject.subject_code}</h1>
        <p className="mx-3 my-3 text-md ">{subject.description}</p>

        <Link
          to={`/allexam?subject=${subject.subject_name}`}
          className="btn btn-outline btn-warning"
        >
          View All Exam
        </Link>
      </div>
    </div>
  );
};

export default SubjectComponent;
