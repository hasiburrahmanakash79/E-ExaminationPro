import React from 'react';
import './FreeCoursePage.css'
import { Link } from 'react-router-dom';
const FreeCoursePage = () => {
    return (
        <div className='mt-5 flex justify-center '>

            <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-10 mx-2'>
                <div className="card  bg-base-100 h-[280px] shadow-xl image-full">
                    <div className='img '>

                    </div>
                    <div className='h1'>
                        <h1 className='text-white text-5xl'>React</h1>
                    </div>
                    <figure ><img className='object-fill w-full' src="https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?w=826&t=st=1692005014~exp=1692005614~hmac=8aa7ea815634b87782826069be21527a09e03d86d9d09cf370e458106a4fa792" alt="Shoes" /></figure>
                    <div className="card-body1 w-full  items-center text-center">
                        <h1 className='text-4xl font-bold'>React</h1>
                        <p className='text-md my-3 mx-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Illum blanditiis quo autem nobis nisi tempora tempore quisquam facere ?</p>
                        <button className='btn btn-sm btn-primary'><Link to={'/exam?type=mcq'}>Exam</Link></button>
                    </div>
                </div>

                <div className="card h-[280px] bg-base-100 shadow-xl image-full">
                    <div className='img '>

                    </div>
                    <div className='h1'>
                        <h1 className='text-white text-5xl'>Math</h1>
                    </div>
                    <figure ><img  className='object-fill w-full' src="https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?w=1380&t=st=1691868782~exp=1691869382~hmac=b21f48370c29394ed8e3f2f8d9c422388b7821487ffaab796af6e3478f5f59f8" alt="Shoes" /></figure>
                    <div className="card-body1 w-full  items-center text-center">
                        <h1 className='text-4xl font-bold'>Math</h1>
                        <p className='text-md my-3 mx-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Illum blanditiis quo autem nobis nisi tempora tempore quisquam facere ?</p>
                        <button className='btn btn-sm btn-primary'><Link to={'/exam?type=fib'}>Exam</Link></button>
                    </div>
                </div>

                <div className="card  h-[280px] bg-base-100 shadow-xl image-full">
                    <div className='img '>
 
                    </div>
                    <div className='h1'>
                        <h1 className='text-white text-5xl'>Physics</h1>
                    </div>
                    <figure ><img  className='object-fill w-full' src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?w=1380&t=st=1692005577~exp=1692006177~hmac=7bfee3a3773c22941b814812516e36568e757b57705c47405487e738c707aae1" alt="Shoes" /></figure>
                    <div className="card-body1 w-full  items-center text-center">
                        <h1 className='text-4xl font-bold'>Physics</h1>
                        <p className='text-md my-3 mx-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Illum blanditiis quo autem nobis nisi tempora tempore quisquam facere ?</p>
                        <button className='btn btn-sm btn-primary'><Link to={'/exam?type=fib'}>Exam</Link></button>
                    </div>
                </div>

                <div className="card  h-[280px] bg-base-100 shadow-xl image-full">
                    <div className='img '>

                    </div>
                    <div className='h1'>
                        <h1 className='text-white text-5xl'>Chemistry</h1>
                    </div>
                    <figure ><img  className='object-fill w-full' src="https://img.freepik.com/free-photo/experiments-chemistry-lab-conducting-experiment-laboratory_155003-1401.jpg?w=1380&t=st=1692005722~exp=1692006322~hmac=181700a2955d57f47cfe8879264e4550a79e3af0cc66a771649fd893d6c8fec6" alt="Shoes" /></figure>
                    <div className="card-body1 w-full  items-center text-center">
                        <h1 className='text-4xl font-bold'>Chemistry</h1>
                        <p className='text-md my-3 mx-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Illum blanditiis quo autem nobis nisi tempora tempore quisquam facere ?</p>
                        <button className='btn btn-sm btn-primary'><Link to={'/exam?type=fib'}>Exam</Link></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FreeCoursePage;