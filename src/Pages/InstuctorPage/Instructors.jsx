import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(instructors.length);
  };
  return (
    <div className="py-8 container mx-auto">
      <h1 className="mb-10 text-4xl font-bold text-center text-white">Our Instructors</h1>
      <div className="md:grid grid-cols-3 gap-5 py-5">
        {instructors.slice(0, displayCount).map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>
        ))}
      </div>
      <div className="text-center my-5">
        {!seeMore && (
          <button
            onClick={handleSeeMore}
            className="btn primary-btn"
          >
            See More Instructors
          </button>
        )}
      </div>
    </div>
  );
};

export default Instructors;
