// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { useLoaderData, useLocation } from 'react-router-dom';
// import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Typewriter from 'react-ts-typewriter';
// import { Hourglass } from 'react-loader-spinner';

// const ExamResult = () => {
//     const [loading, setLoading] = useState(true)
//     const [results, setResults] = useState([])
//     const location = useLocation()
//     const searchParams = new URLSearchParams(location.search)
//     const id = searchParams.get('id')
//     //console.log(id)

//     useEffect(() => {
//         fetch(`http://localhost:4000/result?examId=${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setResults(data)
//                 setLoading(false)
//             })
//     }, [])

//     //console.log(results, '.................................line 21')

//     // const [axiosSecure] = useAxiosSecure()
//     // const { data: result, refetch, isLoading: r_loading } = useQuery({
//     //     queryKey: ['resultData', id],
//     //     queryFn: async () => {
//     //         const res = await axiosSecure.get(`/result?examId=${id}`);
//     //         //console.log(res)
//     //         return res.data;
//     //     }
//     // })
//     // //console.log(result,'asdasdasdadadasdasd')
//     return (

//         <>
//         {
//             loading?
//             <div className="text-red-400 text-4xl flex justify-center items-center h-[70vh]">
//             <h1>
//               <Hourglass
//                 visible={true}
//                 height='80'
//                 width='80'
//                 ariaLabel='hourglass-loading'
//                 wrapperStyle={{}}
//                 wrapperClass=''
//                 colors={['#7710de', '#d6061b']}
//               />
//             </h1>
//           </div> :
//             <div>
//                 {
//                 results.length == 0 ?
//                     <div className="text-red-400 text-4xl flex justify-center items-center h-[70vh]">
//                         <h1>
//                             <Typewriter
//                                 speed={200}
//                                 delay={900}
//                                 loop={true}
//                                 text="No One Give That Exam"
//                             />
//                         </h1>
//                     </div>
//                     :
//                     <div>
//                         {results?.map(((result, index) =>
//                             <div key={index} className='flex justify-center p-5 mx-5 my-2 shadow-md md:mx-20 card'>
//                                 <h1 className='text-lg text-green-500'><span className=''>Exam:</span> {index + 1}</h1>
//                                 <div className='grid grid-cols-3'>
//                                     <div className='' >
//                                         <h1 className='text-xl font-bold'>Student Name: {result.stu_name}</h1>
//                                         <h1 className='text-xl font-bold'>Email: {result.stu_email}</h1>
//                                         <h3>Semester: 8th</h3>

//                                     </div>

//                                     <div>
//                                         <h1 className='font-bold text-md'>Subject: {result.subject}</h1>
//                                         <h1 className='font-bold text-md'>Total Mark: <span className='text-green-500'>{result.totalMark}</span></h1>
//                                         <h2 className='font-bold text-md'>Mark: <span className='text-green-500'>{result.mark}</span></h2>
//                                     </div>
//                                     <div>
//                                         <h2>Exam Code: {result.exam_code}</h2>
//                                         <h2>Subject Code: {result.sub_code}</h2>

//                                     </div>
//                                 </div>

//                             </div>))}
//                     </div>

//             }
//             </div>
//         }

//         </>

//     );

// };

// export default ExamResult;
