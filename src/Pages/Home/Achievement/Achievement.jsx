import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const Achievement = () => {

  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  return (


    <section ref={ref} className='p-5'>
      <h1
        data-aos="zoom-in-down"
        data-aos-duration="800"
        className="text-center text-4xl font-bold pt-10">Out Achievement</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className=' mt-6 p-10 gap-20 md:flex justify-evenly md:mt-10 items-end rounded-xl  primary-bg'>
        <div className='px-5 md:px-0 full md:w-1/2 '>
          <div>
            <h2 className='font-bold text-orange-600'>Why Ours</h2>
            <h2 className='text-3xl font-bold md:my-5'>Our Best Achivements</h2>
            <p className='md:mb-20 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus aliquid dolorem minima. Quas, aperiam nemo maxime error dolorum perspiciatis exercitationem pariatur, quo optio dolor odit ipsam repellat possimus laborum?
            </p>
          </div>
          <div className='md:flex gap-20 md:pb-5'>
            <div>
              <div className='text-[40px]'>
                {

                  inView ?
                    <CountUp className='font-bold' start={40} end={55} duration={3} /> : null}
                K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>

                University Scholars
              </div>
            </div>

            <div>
              <div className='text-[42px]'>
                {

                  inView ?
                    <CountUp className='font-bold' start={10} end={17} duration={3} /> : null}
                K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>

                Professional Educators
              </div>
            </div>

            <div>
              <div className='text-[40px] '>
                {

                  inView ?
                    <CountUp className='font-bold' start={0} end={2} duration={3} /> : null}
                K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>

                Worldwide Branches
              </div>
            </div>

          </div>
        </div>

        <div>
          <img className=' mt-5 md:mb-5 rounded-lg md:mt-[-200px] w-[600px]' src="https://images.unsplash.com/photo-1590649942161-2e7eb2032934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Achievement;