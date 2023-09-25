import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChalkboardTeacher, FaQuestion } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { RiQuestionAnswerLine } from 'react-icons/ri';

const InstructorHome = () => {
    return (
        <div className='p-5'>
            <Helmet><title>Dashboard | E-ExamPro</title></Helmet>
            <h1 className='text-3xl text-center my-10'>Instructor home</h1>

            <div className="grid grid-cols-1 gap-3 pb-6 mt-4 md:grid-cols-4">
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-r-2 rounded-lg cursor-pointer hover:shadow-md hover:scale-105">
          <div>
            <h2>Who many Question you added</h2>
            <h1>200</h1>
          </div>
          <PiStudentBold fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-r-2 rounded-lg cursor-pointer hover:shadow-md hover:scale-105">
          <div>
            <h2>Who many blog you added</h2>
            <h1>30</h1>
          </div>
          <FaChalkboardTeacher fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-r-2 rounded-lg cursor-pointer   hover:shadow-md hover:scale-105">
          <div>
            <h2>Who many Question you added</h2>
            <h1>700</h1>
          </div>
          <FaQuestion fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-r-2 rounded-lg cursor-pointer hover:shadow-md hover:scale-105">
          <div>
            <h2>Answers</h2>
            <h1>900</h1>
          </div>
          <RiQuestionAnswerLine fontSize={28} />
        </div>
      </div>
        </div>
    );
};

export default InstructorHome;