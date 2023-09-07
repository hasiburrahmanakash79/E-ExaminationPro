<<<<<<< HEAD
import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAngleDown, FaCaretRight } from 'react-icons/fa';

=======
// import { Accordion } from '@mui/material';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';
// import { FaAngleDown, FaCaretRight } from 'react-icons/fa';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor/useInstructor";
import useLiveExam from "../../../Hooks/useLiveExam/useLiveExam";
>>>>>>> 49823edac291a04f5e8c1c237819d5b85407383c

export default function Notice() {
  const {user,loading}=useContext(AuthContext)

  const [isInstructor] = useInstructor()

  const[notices,isNoticeLoading]=useLiveExam()
console.log(notices)
  return (
<<<<<<< HEAD
    <div className='py-32 text-white'>
      <Helmet><title>E-ExamPro | Notice</title></Helmet>
=======
    <div className="container mx-auto bg-white/5 p-5 rounded-2xl mt-5">
      <h1 className="text-3xl text-center">Upcoming Exam Schedule</h1>
      <div className="my-7 grid grid-cols-4 gap-5 ">
      {
        notices?.map(notice => <div key={notice._id} className="card w-full bg-white/10 border-2 shadow-xl">
        <div className="card-body">
          <p>Subject Name:<span className="text-purple-300"> {notice?.subjectName} </span></p>
          <p>Exam Code:<span className="text-purple-300 uppercase"> {notice?.exam_code}</span></p>
          <p>Subject Code:<span className="text-purple-300 uppercase"> {notice?.subject_code}</span></p>
          <p>Group: <span className="text-purple-300"> {notice?.group}</span></p>
          <p>Exam Date : <span className="text-purple-300">{notice?.date}</span> </p>
          <p>Instructor:<span className="text-purple-300"> {notice?.instructor}</span> </p>
{
   !isInstructor? <Link to={`/upcomingLiveExam?examID=${notice._id}&email=${user?.email}`} className="mt-5">
          <button className="primary-btn btn">Apply For Live class</button>
        </Link>:<button className="primary-btn btn">See Applied Students</button>
}
  
        </div>
      </div>)
      }
    </div>
    </div>
  );
}

{
  /* <div className='py-32 text-white'>
>>>>>>> 49823edac291a04f5e8c1c237819d5b85407383c
      <div className=' px-5 md:w-1/2 mx-auto'>
        <Accordion className='mb-2 bg-black'>
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><p className=' text-lg font-bold tracking-wide '>Examination Schedule</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p> Dear Students,</p> <br />

              <p>
                We hope this message finds you well. As the current academic year comes to a close, we would like to provide you with important information regarding upcoming examinations.</p> <br />

              <p>Examination Schedule:</p> <br />

              <p>Date: <span className='md:ps-8'>[Start Date] to [End Date]</span></p>
              <p>Timings: <span className='md:ps-2'>Exams will be held from [Start Time] to [End Time] each day.</span></p>
              <p>Subjects: The detailed subject-wise schedule will be shared with students shortly.</p> <br />
              <p>We wish you all the best for your exams and look forward to a successful conclusion of the academic year. <br /> <br />

                Sincerely,<br />
                E-ExamPro Community</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-2'>
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography><p className=' text-lg font-bold tracking-wide '>Exam Guidelines</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>Students must arrive at the examination hall at least 30 minutes before the start of the exam.</p>
              </div>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>Adhere to the dress code and maintain a quiet and focused atmosphere in and around the examination hall.</p>
              </div>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>Bring your school ID card and stationery. Borrowing during exams will not be permitted.</p>
              </div>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>Electronic devices, including cell phones and smartwatches, are strictly prohibited during the exam.</p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography><p className=' text-lg font-bold tracking-wide '>Due Clearences</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>All students are required to clear any pending dues, library books, and other outstanding obligations to be eligible to appear for the upcoming examinations.</p>
              </div>
              <div className='flex items-center gap-5 pb-5'>

                <FaCaretRight></FaCaretRight>
                <p>Please visit the accounts office or contact [Name of Accounts Officer] at [Contact Information] for assistance with due clearances.</p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
</div> */
}
