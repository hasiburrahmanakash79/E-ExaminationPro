import { Link } from 'react-router-dom'
import video from '../../../../src/assets/demo.mp4'

const DemoTestSection = () => {
  return (
    <section className=''>
      <div className='px-10 md:pb-20 text-center rounded-lg primary-bg md:text-left'>
        <h1
          data-aos='zoom-in-down'
          data-aos-duration='600'
          className='mb-10 text-4xl font-bold text-center'
        >
          Demo Exam
        </h1>
        {/* here will be the muted video for demo test */}

        <div className='grid items-center grid-cols-1 mx-auto w-ful md:w-11/12 md:grid-cols-2 '>
          <div
            data-aos='fade-right'
            data-aos-duration='600'
            className='flex items-center justify-center rounded-lg'
          >
            <video
              controls
              muted
              autoPlay
              className='w-full border   rounded-lg h-3/4'
            >
              <source src={video} type='video/mp4' />
            </video>
          </div>
          <div className='space-y-2 md:p-4 md:space-y-6'>
            <h1
              data-aos='fade-up'
              data-aos-duration='600'
              className='mt-4 text-3xl'
            >
              Explore Our Interactive Demo Quiz
            </h1>
            <p data-aos='fade-left' data-aos-duration='600'>
              Welcome to our demo quiz section, designed to help you excel in
              your upcoming exams. Whether you prefer a guided video tutorial or
              want to dive straight into the test, our platform offers both
              options for your convenience. Practice and build your confidence
              in a real exam environment.
            </p>
            <Link
              data-aos='fade-down'
              data-aos-duration='900'
              to='/demo-test'
              className='btn primary-btn'
            >
              Explore How We Take Exams
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoTestSection
