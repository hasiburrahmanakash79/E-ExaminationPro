import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { allExam, examType } from '../../../redux/features/allExam/allExamSlice';

const AllExam = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const subject = searchParams.get('subject')
    console.log(subject)
    const {type,exams}=useSelector((state)=>state.allExam)
    const dispatch=useDispatch()
   
    useEffect(() => {
        fetch(`https://e-exam-pro-server.vercel.app/questionPaper?type=${type ||'mcq'}&subject=${subject}`)
            .then(res => res.json())
    .then(data => {
        dispatch(allExam(data))})
    }, [subject, type])
  console.log(exams)
    return (
        <div className='min-h-[60vh] container mx-auto'>
            <Tabs>
                <div className='text-center'>
                    <TabList>
                        <Tab onClick={() => dispatch(dispatch(examType('mcq')))}>MCQ Exam</Tab>
                        <Tab onClick={() => dispatch(dispatch(examType('FillInTheBlank')))}>Fill In The Blank Exam</Tab>
                        <Tab onClick={() => dispatch(dispatch(examType('multimedia_mcq')))}>MCQ Based on Content Exam</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                        <div className='grid grid-cols-2'>
                            <div className='' >
                                <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                <h2>Exam Code: {exam.subjectCode}</h2>
                                <h3>Semester: {exam.semester}</h3>
                            </div>
                            <div className='grid grid-cols-1'>
                                <div className='flex gap-7 flex-row-reverse'>
                                    <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                    <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                </div>
                                <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                            </div>
                        </div>
                    </div>))}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                        <div className='grid grid-cols-2'>
                            <div className='' >
                                <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                <h2>Exam Code: {exam.subjectCode}</h2>
                                <h3>Semester: {exam.semester}</h3>
                            </div>
                            <div className='grid grid-cols-1'>
                                <div className='flex gap-7 flex-row-reverse'>
                                    <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                    <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                </div>
                                <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                            </div>
                        </div>
                    </div>))}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                        <div className='grid grid-cols-2'>
                            <div className='' >
                                <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                <h2>Exam Code: {exam.subjectCode}</h2>
                                <h3>Semester: {exam.semester}</h3>
                            </div>
                            <div className='grid grid-cols-1'>
                                <div className='flex gap-7 flex-row-reverse'>
                                    <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                    <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                </div>
                                <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                            </div>
                        </div>
                    </div>))}</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AllExam;