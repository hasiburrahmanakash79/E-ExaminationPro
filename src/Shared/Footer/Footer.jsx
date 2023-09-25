import React from "react";
import logo from "../../assets/logo12.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative bg-black text-white pt-11">
      <div className="grid grid-cols-1 gap-10 px-8 pb-4 space-y-6 border-b-2 md:grid-cols-4 sm:grid-cols-2">
        <div className="">
          <Link to="/" className="w-1/3">
            <img src={logo} alt="" className="" />
          </Link>
          <p className="mt-2 text-sm text-justify md:mt-0">
            It’s a special day when our beloved someone like any of our
            students, friends, College or University have to sit for their
            exams. Whether it is a exam for school, college just tell them to
            believe in themselves and want success and good performance.
          </p>
          <div className="flex items-center gap-8 mt-3">
            <p className="">Social <br /> Link:</p>
            <a href="#" >
              <img
                src="https://i.ibb.co/KNDjf0n/blue-social-media-logo-197792-1759.jpg"
                alt="" className="w-10 rounded"
              />
            </a>
            <a href="#">
              <img
                src="https://i.ibb.co/xq9hW6Q/new-twitter-logo-x-2023-twitter-x-logo-vector-download-691560-10809.jpg"
                alt=""
                className="w-10 rounded"
              />
            </a>
            <Link to="/contact">
              <img
                src="https://i.ibb.co/smwDwG5/Untitled-design.jpg"
                alt=""
                className="w-10 rounded"
              />
            </Link>
            <a href="#">
              <img
                src="https://i.ibb.co/0fV03Ds/li.jpg"
                alt=""
                className="w-10 rounded"
              />
            </a>
          </div>
        </div>
        <div className="space-y-3 text-center  ">
          <h2 className="w-1/2 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md   md:mt-0">
            Exam Platform
          </h2>
          <p className="hover:underline">MCQ Exam</p>
          <p className="hover:underline">Live Exam</p>
          <p className="hover:underline">Student</p>
          <p className="hover:underline">Instructor</p>
        </div>
        <div className="space-y-3 text-center  ">
          <h2 className="w-3/5 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md   md:mt-0">
            Who we service
          </h2>
          <p className="hover:underline">Schools</p>
          <p className="hover:underline">Higher education</p>
          <p className="hover:underline">University</p>
          <p className="hover:underline">Companies &Organizations</p>
        </div>
        <div className="space-y-3 text-center  ">
          <h2 className="w-1/2 mx-auto mt-6 text-xl font-bold border-b-2 rounded-md   md:mt-0">
            Our Payment Partner
          </h2>
          <img src="https://i.ibb.co/yBFjz1r/SSLCommerz-Pay-With-logo-All-Size-01-2048x314-1.pnghttps://i.ibb.co/rtzYdSy/payment2.png" alt="" />
          {/* <img src="https://i.ibb.co/4VP16W1/payment1.png" alt="" />
          <img src="https://i.ibb.co/rtzYdSy/payment2.png" alt="" /> */}
        </div>
      </div>
      <p className="py-2 text-center  ">
        ©2023 The Web Titans. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
