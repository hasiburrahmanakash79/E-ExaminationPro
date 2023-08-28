import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FaAngleDown } from 'react-icons/fa';

export default function Faq() {
  return (
    <div className=' md:flex items-center justify-between container mx-auto gap-5  py-10 md:px-12' >
      <div className='md:w-1/2' >
        <img className='w-1/3 mx-auto' src="https://cdn-icons-png.flaticon.com/512/4403/4403555.png" alt="" />
      </div>
      <div className='md:w-1/2 md:pe-20 mx-auto px-5 md:mt-0 mt-10'>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><p className='md:text-xl font-semibold'>What is E-examPro?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p><span className='font-semibold'>E-examPro</span> is the cutting-edge online platform designed to revolutionize the way students take exams. With a commitment to excellence and innovation, E-examPro provides a seamless and efficient solution for conducting exams in a digital landscape. Say goodbye to traditional exam paper stress and hello to a new era of convenient, accessible, and secure exam-taking.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography><p className='md:text-xl font-semibold'>Why Students choosing E-examPro platform?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>E-examPro adapts to your learning level. The platforms intelligent algorithms present questions that match your competency, giving you a fair and accurate assessment that reflects your true understanding of the subject matter.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography><p className='md:text-xl font-semibold'>Is E-examPro easy for cheating?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>The platform is equipped with anti-cheating measures, such as webcam monitoring and browser lockdown, ensuring that each students performance is genuine and reflective of their own efforts.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography><p className='md:text-xl font-semibold'>How to participate in E-examPro platform?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>New users can quickly register for the platform by using their Google accounts. This simplifies the registration process, reducing friction and encouraging more students to participate in exams.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}


