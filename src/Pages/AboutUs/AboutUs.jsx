import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='container px-6 mx-auto'>
      <Helmet>
        <title>E-ExamPro | About Us</title>
      </Helmet>
      <div className='items-center justify-between py-20 text-center md:flex md:gap-20 md:text-left'>
        <div className='overflow-x-hidden md:w-1/2'>
          <h2
            data-aos='zoom-in'
            data-aos-duration='1000'
            className='pb-3 text-sm'
          >
            About E-ExamPro
          </h2>
          <div
            data-aos='fade-right'
            data-aos-easing='ease-in-sine'
            className='pb-5'
          >
            <h2 className='pb-3 text-4xl font-bold tracking-wide xl:text-7xl'>
              Reach your peak.
            </h2>
            <h2 className='text-4xl font-bold tracking-wide xl:text-7xl'>
              We'll help you get there.
            </h2>
          </div>

          <p
            data-aos='fade-right'
            data-aos-easing='ease-in-sine'
            className='pb-5 text-lg  '
          >
            We recognize the importance of seamless and efficient examination
            processes, and that's why we have created a cutting-edge solution
            that allows students to take their exams from the comfort of their
            own space. Our platform is built on a foundation of innovation and
            user-centric design, ensuring a user-friendly experience.
          </p>
          <Link
            data-aos='fade-down'
            data-aos-duration='1000'
            to='/contact'
            className='  border-none shadow-md btn primary-btn'
          >
            Contact Us
          </Link>
        </div>

        <div
          data-aos='fade-left'
          data-aos-easing='ease-in-sine'
          className='md:w-1/2'
        >
          <img
            className='w-2/3 mx-auto mt-10'
            src='https://i.ibb.co/sPdHD97/45397-removebg.png'
            alt=''
          />
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-duration='1500'
        className='container md:mt-10 md:mb-10 '
      >
        <p className='w-full mx-auto text-center md:w-1/2 '>
          Our commitment extends beyond convenience. We strive to create an
          inclusive platform that accommodates various subjects, disciplines,
          and formats, providing an expansive repository of resources for
          comprehensive preparation. We take pride in supporting the educational
          ecosystem by partnering with schools, colleges, universities, and
          educators to facilitate a new era of examination that aligns with the
          digital age.
        </p>
      </div>

      <div className='items-center justify-center gap-20 mt-20 md:flex'>
        <div
          data-aos='fade-left'
          data-aos-easing='ease-in-sine'
          className='w-1/2 mx-auto mb-10 '
        >
          <img
            className='md:w-2/4 md:mt-20 md:mx-auto'
            src='https://i.ibb.co/bPGHBsD/tswv-dzjb-230710.png'
            alt=''
          />
        </div>

        <div
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          className='px-5 text-center md:w-1/2 md:mt-10 md:text-left'
        >
          <h1 className='w-full text-3xl font-bold xl:text-5xl '>
            E-ExamPro plays a huge role <br /> by providing unique, <br />
            authentic peer advice in <br /> study field.
          </h1>
          <p className='mt-5   m'>
            Our commitment extends beyond convenience. We strive to create an
            inclusive platform that accommodates various subjects, disciplines,
            and formats, providing an expansive repository of resources for
            comprehensive preparation. We take pride in supporting the
            educational ecosystem by partnering with schools, colleges,
            universities, and educators to facilitate a new era of examination
            that aligns with the digital age.
          </p>
        </div>
      </div>

      <div className='py-6 md:mt-20'>
        <div className='container flex flex-col items-center justify-center p-4 mx-auto sm:p-10'>
          <p
            data-aos='fade-down'
            data-aos-duration='700'
            className='p-2 text-lg  font-medium text-center uppercase tracking'
          >
            Development team
          </p>
          <h1
            data-aos="fade-down"
            data-aos-duration="1500"
            className="text-4xl font-bold leading text-center sm:text-5xl">The Talented People Behind the Scenes</h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-20">

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">


              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
                </div>
              </div>


              <div className="flex-1 my-4">
                <p className="text-xl  leading">Tazwarul Islam</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=md.tazwarul.islam.07@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/md-tazwarul-islam-abir-5762b7214/" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/md_tazwarul" target='_blank'><FaTwitter /></a>

                <a href="https://github.com/Abir-7" target='_blank'><FaGithub /></a>
              </div>

            </div>

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
              {/* <div className=' avatar -mt-10'>
                <img alt="" className="rounded-full  w-16     " src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
              </div> */}
              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/19jFGZY/saiful-img1.png" />
                </div>
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl  leading">Saiful Arafat</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifularafat.info@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/saiful-islam-60158b257/" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/saifularafat69" target='_blank'><FaTwitter /></a>

                <a href="https://github.com/saifularafat" target='_blank'><FaGithub /></a>
              </div>

            </div>

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
              {/* <div className=' avatar -mt-10'>
                <img alt="" className="rounded-full  w-16     " src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
              </div> */}
              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/zSjMhX5/IMG-20230717-WA0000.jpg" />
                </div>
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl  leading">Al Mamud Bijoy</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bijoymamud.09@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/almamudbijoy09/" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/BijoyMamud09" target='_blank'><FaTwitter /></a>

                <a href="https://github.com/bijoymamud" target='_blank'><FaGithub /></a>
              </div>

            </div>

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
              {/* <div className=' avatar -mt-10'>
                <img alt="" className="rounded-full  w-16     " src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
              </div> */}
              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/s9zYLf1/38085386-10213204290847361-3197807351797121024-n.jpg" />
                </div>
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl  leading">Naser Mahmud</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmudbappy01@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/naser-mahmud-6a2323280/" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/NaserMahmud01" target='_blank'><FaTwitter /></a>

                <a href="https://github.com/NaserUddinMahmud" target='_blank'><FaGithub /></a>
              </div>

            </div>

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
              {/* <div className=' avatar -mt-10'>
                <img alt="" className="rounded-full  w-16     " src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
              </div> */}
              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/7ymgLNR/akash.jpg" />
                </div>
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl  ">Hasibur Rahman</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hasiburrahmanakash79@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/hasiburrahmanakash79/" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/HasiburRakash79" target="_blank"><FaTwitter /></a>

                <a href="https://github.com/hasiburrahmanakash79" target="_blank"><FaGithub /></a>
              </div>

            </div>

            <div
              // data-aos="fade-right"
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
              {/* <div className=' avatar -mt-10'>
                <img alt="" className="rounded-full  w-16     " src="https://i.ibb.co/HzhTQqS/Abir.jpg" />
              </div> */}
              <div className=" avatar -mt-10">
                <div className="w-24 rounded-full mx-auto  " >
                  <img src="https://i.ibb.co/2620B9f/Group-1.jpg" />
                </div>
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl  leading">Habibur Nabi</p>
                <p className=' '>Jr. Front-End Developer</p>
              </div>

              <div className='flex mx-auto gap-5 text-xl pb-3'>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=habiburnabiarafat@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/habib-n19" target='_blank'><FaLinkedin /></a>

                <a href="https://twitter.com/habib_N19" target="_blank"><FaTwitter /></a>

                <a href="https://github.com/habib-N19" target="_blank"><FaGithub /></a>
              </div>

            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
