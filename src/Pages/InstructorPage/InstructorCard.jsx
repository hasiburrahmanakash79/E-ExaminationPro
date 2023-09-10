import React from 'react';
import { FcApproval } from "react-icons/fc";

const InstructorCard = ({ instructor }) => {
  const { instructor_name, image, experience, email, phone_no } = instructor;
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1200"
      className="card md:card-side shadow-2xl backdrop-blur-sm bg-transparent p-3 mt-2 border border-blue-600">
      <div className="avatar">
        <div className="md:w-52 rounded-lg">
          <img src={image} />
        </div>
      </div>
      <div className="card-body font-semibold">
        <h2 className="card-title">
          {instructor_name}<FcApproval></FcApproval>
        </h2>
        <a className="text-zinc-400 hover:underline">{email}</a>
        <p>Call: {phone_no}</p>
        <p>Experience: {experience}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost btn-sm">btn</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;