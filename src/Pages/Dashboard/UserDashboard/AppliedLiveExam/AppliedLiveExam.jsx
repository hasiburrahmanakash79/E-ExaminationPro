import { useState } from "react";
import { Link } from "react-router-dom";

const AppliedLiveExam = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl">AppliedLiveExam</h2>
      <div>
        <li>
          <Link to="/dashboard/examRoom">Math</Link>
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
