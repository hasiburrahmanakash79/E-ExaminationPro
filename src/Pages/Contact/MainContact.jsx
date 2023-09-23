import React from 'react'
import { Link } from 'react-router-dom'

const MainContact = () => {
  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const currentDate = new Date().toLocaleDateString(undefined, options)
    return currentDate
  }

  return (
    <div className=" bg-[url('https://i.ibb.co/yfmKFZg/premium-photo-1679923913597-2848bb0acf0a.jpg')]  ag-fixed  ag-cover my-10">
      <div className='px-10 py-20   bg-black  bg-opacity-70 md:px-28'>
        <div className='items-center grid-cols-2 gap-10 md:grid'>
          <div className=''>
            <img
              src='https://cdn.wallpapersafari.com/26/10/lV9LYT.jpg'
              className='rounded-xl'
              alt=''
            />
          </div>
          <div className='text-center md:text-left'>
            <p className='mt-4 text-2xl '>{getCurrentDate()}</p>
            <h1 className='my-3 text-2xl uppercase'>
              Get in Touch with Us - Your Path to Online Exam Success!
            </h1>
            <p>
              Our online examination platform is committed to providing a
              seamless and user-friendly experience. If you have questions,
              feedback, or need assistance, please don't hesitate to contact us.
              We value your input and are here to help you excel in your exams.
              Reach out to our dedicated support team today!
            </p>
            <Link to='/contact' className='btn primary-btn mt-7'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContact
