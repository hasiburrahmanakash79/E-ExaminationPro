import React from "react";
import logo from "../../assets/logo12.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative primary-bg pt-11">
      <div className="px-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 space-y-6  border-b border-slate-800 pb-4">
        <div className=" text-center text-white">
          <Link to="/">
            <img
              data-aos="fade-up"
              data-aos-duration="600"
              src={logo}
              alt=""
              className="md:w-auto w-2/4 mx-auto"
            />
          </Link>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-sm text-justify md:mt-0 mt-2"
          >
            It’s a special day when our beloved someone like any of our
            students, friends, College or University have to sit for their
            exams. Whether it is a exam for school, college just tell them to
            believe in themselves and want success and good performance.
          </p>
          <div className=" mx-auto mt-3 w-1/2 md:w-1/3 grid grid-cols-3 gap-8">
            <div>
              <p className="bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full">
                <FaFacebookF />
              </p>
            </div>
            <p className="bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full">
              <FaTwitter />
            </p>
            <p className="bg-white w-[35px] h-[35px] flex justify-center items-center text-black hover:bg-[#0E8CF1] hover:text-white transition duration-300 rounded-full">
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="text-center text-white space-y-3">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-xl font-bold border-b-2 w-1/2 mx-auto border-slate-600 rounded-md md:mt-0 mt-6"
          >
            Exam Platform
          </h2>
          <p className="hover:underline">MCQ Exam</p>
          <p className="hover:underline">Cheating</p>
          <p className="hover:underline">Student</p>
          <p className="hover:underline">Teachers</p>
          <p className="hover:underline">Testimonial</p>
        </div>
        <div className="text-center text-white space-y-3">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-xl font-bold border-b-2 w-3/5 mx-auto border-slate-600 rounded-md md:mt-0 mt-6"
          >
            Who we service
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="500"
            className="hover:underline"
          >
            Schools
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="900"
            className="hover:underline"
          >
            Higher education
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1300"
            className="hover:underline"
          >
            University
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1800"
            className="hover:underline"
          >
            Companies &Organizations
          </p>
        </div>
        <div className="text-center text-white space-y-3">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-xl font-bold border-b-2 w-1/2 mx-auto border-slate-600 rounded-md md:mt-0 mt-6"
          >
            Resources
          </h2>

          <p
            data-aos="fade-down"
            data-aos-duration="500"
            className="hover:underline"
          >
            Support
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="900"
            className="hover:underline"
          >
            Exams Videos
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1300"
            className="hover:underline"
          >
            Groups Chat
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1800"
            className="hover:underline"
          >
            Technology
          </p>
        </div>
      </div>
      <p className="text-center text-slate-500 py-2">
        ©2023 Your Organization Name The Web Titans. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
