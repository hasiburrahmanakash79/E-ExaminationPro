import React from 'react'
import logo from '../../assets/logo12.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='relative primary-bg pt-11'>
      <div className='grid grid-cols-1 gap-10 px-8 pb-4 space-y-6 border-b md:grid-cols-4 sm:grid-cols-2 border-slate-800'>
        <div className='text-center text-white '>
          <Link to='/'>
            <img src={logo} alt='' className='w-2/4 mx-auto md:w-auto' />
          </Link>
          <p className='mt-2 text-sm text-justify md:mt-0'>
            It’s a special day when our beloved someone like any of our
            students, friends, College or University have to sit for their
            exams. Whether it is a exam for school, college just tell them to
            believe in themselves and want success and good performance.
          </p>
          <div className='grid w-1/2 grid-cols-3 gap-8 mx-auto mt-3 md:w-1/3'>
            <div>
              <p className='bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full'>
                <Link to="https://www.facebook.com/">
                  <FaFacebookF />
                </Link>
              </p>
            </div>
            <p className='bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full'>
              <Link to="https://www.twitter.com/">
                <FaTwitter />
              </Link>
            </p>
            <p className='bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full'>
              <Link to="https://linkedin.com">
                <FaLinkedinIn />
              </Link>
            </p>
          </div>
        </div>
        <div className='space-y-3 text-center text-white'>
          <h2 className='w-1/2 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md border-slate-600 md:mt-0'>
            Exam Platform
          </h2>
          <p className='hover:underline'>
            <Link to='/demo-test'>MCQ Exam</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/dashboard/userHome">User</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/instructors">Instructor</Link></p>
        </div>
        <div className='space-y-3 text-center text-white'>
          <h2 className='w-3/5 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md border-slate-600 md:mt-0'>
            Who we service
          </h2>
          <p className='hover:underline'>
            <Link to="/allSubjects">Schools</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/allSubjects">Higher education</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/allSubjects">University</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/about">Companies & Organizations</Link>
          </p>
        </div>
        <div className='space-y-3 text-center text-white'>
          <h2 className='w-1/2 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md border-slate-600 md:mt-0'>
            Resources
          </h2>

          <p className='hover:underline'>
            <Link to="/contact">Support</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/joinLiveExam">Live Exams</Link>
          </p>
          <p className='hover:underline'>
            <Link to="/forum">Groups Chat</Link>
          </p>
          <p className='hover:underline'>
            <Link to="">Technology</Link>
          </p>
        </div>
      </div>
      <p className='py-2 text-center text-slate-500'>
        ©2023 The Web Titans. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
