import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FaAngleDown, FaCaretRight } from 'react-icons/fa';


export default function Notice() {
  return (
    <div className='py-32 text-white'>
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
    </div>
  );
}