import React from 'react';
import './FreeCoursePage.css'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useState } from 'react';
const FreeCoursePage = () => {
    // const { isLoading, isError, data, error } = useQuery({
    //     queryKey: ['allSubject'],
    //     queryFn: async ()=>{
    //         const res=axios.get('https://e-exam-pro-server.vercel.app/allSubjects')
    //         return data=res.data
    //     },
    //   })
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://e-exam-pro-server.vercel.app/allSubjects')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div className='mt-5 flex justify-center '>

            <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-10 mx-2'>
                {
                    data?.map((subject, index) => <div className="card  bg-base-100 h-[280px] shadow-xl image-full">
                        <div className='img '>

                        </div>
                        <div className='h1'>
                            <h1 className='text-white text-5xl'>{subject.subject_name}</h1>
                        </div>
                        <figure ><img className='object-fill w-full' src={subject.img_link} alt="Shoes" /></figure>
                        <div className="card-body1 w-full  items-center text-center">
                            <h1 className='text-4xl font-bold'>{subject.subject_code}</h1>
                            <p className='text-md my-3 mx-3 '>{subject.description}</p>
                            <button className='btn btn-sm btn-primary'><Link to={`/allexam?subject=${subject.subject_name}`}>View All Exam</Link></button>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default FreeCoursePage;
