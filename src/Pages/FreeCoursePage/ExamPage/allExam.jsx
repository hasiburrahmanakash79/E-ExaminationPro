import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { allExam, checkBatch, examType } from '../../../redux/features/allExam/allExamSlice';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useInstructor from '../../../Hooks/useInstructor/useInstructor';
import Typewriter from 'react-ts-typewriter';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';

const AllExam = () => {

    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const { user, loading } = useContext(AuthContext)


    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const subject = searchParams.get('subject')
    console.log(subject)



    const { type, exams, batch } = useSelector((state) => state.allExam)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!loading) {
            fetch(`http://localhost:4000/userBatch?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data, '----------line 25')
                    dispatch(checkBatch(data))
                })
        }
    }, [user?.email, loading])
    console.log(batch, '---------------------------------\\\\\\\------------------------------------------34')
    useEffect(() => {
        if (!loading) {

            if (isAdmin ? isAdmin : isInstructor ? isInstructor : batch) {
                fetch(`http://localhost:4000/questionPaper?type=${type || 'mcq'}&subject=${subject}&instructor_email=${user?.email}&batch=${batch}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data, '----------line 25')
                        dispatch(allExam(data))
                    })
            }
        }
    }, [subject, type, loading, batch,isInstructor,isAdmin])
    console.log(exams)
    console.log(type)
    console.log(isAdmin)
    return (
        <>

            {
          isAdmin || isInstructor || batch ? 
           
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
                            {exams.length == 0 ? <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'><h1><Typewriter speed={200} delay={900} loop={true} text='No Exam Added....' /></h1></div> :
                                <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                                    <div className='grid grid-cols-2'>
                                        <div className='' >
                                            <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                            <h2>Exam Code: {exam.exam_code}</h2>
                                            <h2>Subject Code: {exam.subject_code}</h2>
                                            <h3>Batch:{exam.batch}</h3>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <div className='flex gap-7 flex-row-reverse'>
                                                <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                                <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                            </div>
                                            {
                                                isInstructor ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/examResults?id=${exam._id}`}>See Exam Result</Link></button> : isAdmin ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/examResults?id=${exam._id}`}>See Exam Result</Link></button> : exam.isCompleted ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'>Allready Given</button> : <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                                            }
                                        </div>
                                    </div>
                                </div>))}</h2>
                            }
                        </TabPanel>
                        <TabPanel>
                            {exams.length == 0 ? <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'><h1><Typewriter speed={200} delay={900} loop={true} text='No Exam Added....' /></h1></div> :
                                <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                                    <div className='grid grid-cols-2'>
                                        <div className='' >
                                            <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                            <h2>Exam Code: {exam.exam_code}</h2>
                                            <h2>Subject Code: {exam.subject_code}</h2>
                                            <h3>Semester: {exam.batch}</h3>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <div className='flex gap-7 flex-row-reverse'>
                                                <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                                <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                            </div>
                                            {
                                                isInstructor ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/examResults?id=${exam._id}`}>See Exam Result</Link></button> :isAdmin?<button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/examResults?id=${exam._id}`}>See Exam Result</Link></button> :exam.isCompleted ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'>Allready Given</button> : <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                                            }
                                        </div>
                                    </div>
                                </div>))}</h2>

                            }
                        </TabPanel>
                        <TabPanel>
                            {exams.length == 0 ? <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'><h1><Typewriter speed={200} delay={900} loop={true} text='No Exam Added....' /></h1></div> :
                                <h2>{exams?.map(((exam, index) => <div key={index} className='my-2 card p-5 flex justify-center'>
                                    <div className='grid grid-cols-2'>
                                        <div className='' >
                                            <h1 className='text-xl font-bold'>Subject: {exam.subjectName}</h1>
                                            <h2>Exam Code: {exam.exam_code}</h2>
                                            <h2>Subject Code: {exam.subject_code}</h2>
                                            <h3>Semester: {exam.batch}</h3>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <div className='flex gap-7 flex-row-reverse'>
                                                <h1 className='text-md font-bold'>Type: {exam.type}</h1>
                                                <h2 className='text-md font-bold'>Date: {exam.date}</h2>
                                            </div>
                                            {
                                                isInstructor ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/examResults?id=${exam._id}`}>See Exam Result</Link></button> : exam.isCompleted ? <button className='btn w-1/3 ms-auto btn-sm btn-primary'>Allready Given</button> : <button className='btn w-1/3 ms-auto btn-sm btn-primary'><Link to={`/exam/${exam._id}`}>Exam</Link></button>
                                            }
                                        </div>
                                    </div>
                                </div>))}</h2>

                            }
                        </TabPanel>
                    </Tabs>

                </div>
:
<div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'><h1><Typewriter speed={200} delay={900} loop={true} text='Please Add Your Batch In Update Profile Section...' /></h1></div> 


            }

        </>
    );
};

export default AllExam;