import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
import { useEffect } from 'react';
import { useState } from 'react';

const ExamResult = () => {
    const [results, setResults] = useState([])
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:4000/result?examId=${id}`)
            .then(res => res.json())
            .then(data => setResults(data))
    }, [])





    // const [axiosSecure] = useAxiosSecure()
    // const { data: result, refetch, isLoading: r_loading } = useQuery({
    //     queryKey: ['resultData', id],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/result?examId=${id}`);
    //         console.log(res)
    //         return res.data;
    //     }
    // })
    // console.log(result,'asdasdasdadadasdasd')
    return (
        <div>
            {results?.map(((result, index) =>
                <div key={index} className='my-2 mx-5 md:mx-20 card p-5 flex justify-center shadow-md'>
                    <h1 className='text-green-500 text-lg'><span className=''>Exam:</span> {index + 1}</h1>
                    <div className='grid grid-cols-3'>
                        <div className='' >
                            <h1 className='text-xl font-bold'>Student Name: {result.stu_name}</h1>
                            <h1 className='text-xl font-bold'>Email: {result.stu_email}</h1>
                            <h3>Semester: 8th</h3>

                        </div>


                        <div>
                            <h1 className='text-md font-bold'>Subject: {result.subject}</h1>
                            <h1 className='text-md font-bold'>Total Mark: <span className='text-green-500'>{result.totalMark}</span></h1>
                            <h2 className='text-md font-bold'>Mark: <span className='text-green-500'>{result.mark}</span></h2>
                        </div>
                        <div>
                            <h2>Exam Code: {result.exam_code}</h2>
                            <h2>Subject Code: {result.sub_code}</h2>

                        </div>
                    </div>

                </div>))}
                
        </div>

    );

};

export default ExamResult;