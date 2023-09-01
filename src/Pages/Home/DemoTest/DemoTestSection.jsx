import { Link } from 'react-router-dom'

const DemoTestSection = () => {
  return (
    <section className='my-10 md:my-20'>
      <div className='p-10 mx-4 rounded-lg primary-bg'>
        <h1 className='mb-10 text-4xl font-bold text-center text-white'>
          Demo Exam
        </h1>
        {/* here will be the muted video for demo test */}

        <div className='grid items-center grid-cols-1 mx-auto w-ful md:w-11/12 md:grid-cols-2 '>
          <div className='flex items-center justify-center rounded-lg'>
            <video controls muted autoPlay className='w-11/12 rounded-lg h-3/4'>
              <source src='' type='video/mp4' />
            </video>
          </div>
          <div className='space-y-2 md:p-4 md:space-y-6'>
            <h1 className='mt-4 text-3xl'>Explore Our Interactive Demo Quiz</h1>
            <p>
              Welcome to our demo quiz section, designed to help you excel in
              your upcoming exams. Whether you prefer a guided video tutorial or
              want to dive straight into the test, our platform offers both
              options for your convenience. Practice and build your confidence
              in a real exam environment.
            </p>
            <Link to='/demo-test' className='btn primary-bg'>
              Explore How We Take Exams
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoTestSection
