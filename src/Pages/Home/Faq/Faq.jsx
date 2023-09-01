import * as React from "react";

export default function Faq() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center">Frequently Ask Question</h1>
      <div className=" md:flex items-center justify-between container mx-auto gap-5  py-10 p-5">
        <div className="w-full">
          <img
            className="w-1/2 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/4403/4403555.png"
            alt=""
          />
        </div>

        <div className="dark:bg-none text-white w-full space-y-4 ">
          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl ">
                What is E-examPro?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  <span className="font-semibold ">E-examPro</span> is the
                  cutting-edge online platform designed to revolutionize the way
                  students take exams. With a commitment to excellence and
                  innovation, E-examPro provides a seamless and efficient
                  solution for conducting exams in a digital landscape. Say
                  goodbye to traditional exam paper stress and hello to a new
                  era of convenient, accessible, and secure exam-taking.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary
                className="py-2 outline-none cursor-pointer 
               text-xl"
              >
                Why Students choosing E-examPro platform?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  E-examPro adapts to your learning level. The platforms
                  intelligent algorithms present questions that match your
                  competency, giving you a fair and accurate assessment that
                  reflects your true understanding of the subject matter.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary
                className="py-2 outline-none cursor-pointer 
               text-xl"
              >
                Is E-examPro easy for cheating?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  The platform is equipped with anti-cheating measures, such as
                  webcam monitoring and browser lockdown, ensuring that each
                  students performance is genuine and reflective of their own
                  efforts.
                </p>
              </div>
            </details>
          </div>

          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary
                className="py-2 outline-none cursor-pointer 
                text-xl"
              >
                How to participate in E-examPro platform?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  New users can quickly register for the platform by using their
                  Google accounts. This simplifies the registration process,
                  reducing friction and encouraging more students to participate
                  in exams.
                </p>
              </div>
            </details>
          </div>
          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary
                className="py-2 outline-none cursor-pointer 
                text-xl"
              >
                How to participate in E-examPro platform?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  New users can quickly register for the platform by using their
                  Google accounts. This simplifies the registration process,
                  reducing friction and encouraging more students to participate
                  in exams.
                </p>
              </div>
            </details>
          </div>
          <div className="border border-violet-600 px-5 shadow-2xl rounded-md">
            <details>
              <summary
                className="py-2 outline-none cursor-pointer 
                text-xl"
              >
                How to participate in E-examPro platform?
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[#c0c0c0]">
                  New users can quickly register for the platform by using their
                  Google accounts. This simplifies the registration process,
                  reducing friction and encouraging more students to participate
                  in exams.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
