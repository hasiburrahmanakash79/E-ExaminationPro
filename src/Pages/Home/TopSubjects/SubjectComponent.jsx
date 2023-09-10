import { Link } from "react-router-dom"

const SubjectComponent = ({ subject }) => {
  console.log(subject?.subject)
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1200"
      className='relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl'>
      <div className=''>
        <img
          className='object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
          src={subject?.image}
          alt=''
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex translate-y-[50%] md:translate-y-[60%] flex-col items-center justify-center px-10 mb-3 text-center transition-all duration-500 group-hover:translate-y-0'>
        <h1 className='text-2xl font-semibold text-white group-hover:italic'>
          {subject?.subject}
        </h1>
        <p className='mb-3 italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
          Lorem ipsum dolor sit.
        </p>
        <div className='flex gap-5 mt-5 text-xl primary-btn p-2 rounded-md md:mt-10'>
          <Link to="/allSubjects">
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubjectComponent
