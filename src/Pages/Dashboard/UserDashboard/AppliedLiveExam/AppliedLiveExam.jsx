import { useState } from "react";
import { Link } from "react-router-dom";
import LiveExamModal from "../../../../Components/LiveExamModal/LiveExamModal";

const AppliedLiveExam = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl">AppliedLiveExam</h2>
      <div>
        <li>
          <button onClick={() => setIsOpen(!isOpen)}>Add Task</button>
          <LiveExamModal isOpen={isOpen} setIsOpen={setIsOpen}></LiveExamModal>
        </li>
        <li>
          <Link>Physics</Link>
        </li>
        <li>
          <Link>Biology</Link>
        </li>
        <li>
          <Link>Chemistry</Link>
        </li>
        <li>
          <Link>Fill in the blank</Link>
        </li>
      </div>
    </div>
  );
};

export default AppliedLiveExam;
