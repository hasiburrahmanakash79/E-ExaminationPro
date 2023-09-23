import { Link } from 'react-router-dom';
// import error from "../../assets/error.png";
import error from "../../assets/error.png"
import "./Error.css"

const Error = () => {

    return (
        <div className='h-[100vh]'>
            <>
                <div className='items-center justify-center pt-5 space-y-3 md:flex md:space-y-8 md:translate-y-1/4 md:pt-0'>
                    <div className='space-y-1 text-center  md:space-y-3 md:text-left mb-14'>
                        <p className=''>Error <span className='text-xl font-semibold tracking-widest'>404</span></p>
                        <h2 className='text-4xl md:text-6xl'>Hey Buddy</h2>
                        <p className='pt-1  md:pt-3'>we can not seem to find the page <br />you are looking for 😟</p>
                        <div className='pt-3 md:pt-4'>
                            <Link
                                to="/"
                                className='py-3 px-7 rounded-xl  shadow-md'
                            >Go Back</Link>
                        </div>
                    </div>
                    <div className='relative md:w-1/2'>
                        <div className='object-cover w-2/4 mx-auto sm:w-3/5 images'>
                            <img
                                src={error}
                                alt="error image"
                                />
                            <div className='md:w-60 md:h-16 w-32 h-10 mx-auto rounded-[50%] blur-sm shadow_image'>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Error;