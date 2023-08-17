import { Link } from 'react-router-dom'

const DemoTestSection = () => {
  return (
    <>
      <h1 className='mb-10 text-4xl font-bold text-center text-slate-200'>
        Demo Exam
      </h1>
      <section
        className='pt-5 pb-5 mx-4 rounded-lg '
        style={{
          background:
            'linear-gradient(45deg,rgb(17, 9, 83), rgb(54, 2, 102), rgb(4, 64, 114), rgb(73, 1, 114))'
        }}
      >
        {/* here will be the muted video for demo test */}

        <div className='grid items-center grid-cols-1 mx-auto w-ful md:w-11/12 md:grid-cols-2 '>
          <div className='flex items-center justify-center rounded-lg'>
            <video controls muted autoPlay className='w-11/12 rounded-lg h-3/4'>
              <source src='' type='video/mp4' />
            </video>
          </div>
          <div className='space-y-2 text-center md:p-4 md:space-y-6'>
            <h1 className='mt-4 text-2xl'>
              Lorem ipsum dolor sit, amet consectetur.
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              aliquid possimus facilis reprehenderit illum recusandae
              consequatur, excepturi sint inventore voluptatum.
            </p>
            <Link to='/demo-test' className='rounded-full btn navigation-bar'>
              Explore How We Take Exams
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default DemoTestSection
