import React from "react";
import { Link } from "react-router-dom";

const ExamRoom = () => {
  return (
    <div className="h-screen p-5 border-2">
      <h1 className="text-center text-2xl pb-5">Exam Room</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-2 p-5 bg-white/10">
          <h1>all exam question set</h1>
        </div>

        <div className="col-span-1 w-full">
          <div className="md:grid grid-cols-2 p-5">
            <div className="h-56 w-56 mx-auto  mb-5">
              <img className="rounded-full" src="https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg" alt="" />
            </div>
            <div className="h-56 mx-auto mb-5">
              <img src="https://website-assets.userpilot.com/wp-content/uploads/2023/05/Userpilot-events-and-webinars.webp" alt="" />
            </div>
            <div className="h-56 w-56 mx-auto mb-5">
              <img className="rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1191" alt="" />

            </div>
          </div>

          <button className="btn btn-error">
            <Link to="/">Leave Exam</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamRoom;
