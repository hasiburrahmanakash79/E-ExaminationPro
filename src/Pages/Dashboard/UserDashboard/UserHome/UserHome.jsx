import {
  FaFileAlt,
  FaFileSignature,
  FaInfoCircle,
  FaListAlt,
  FaRegDotCircle,
  FaStopwatch,
  FaVideo,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const UserHome = () => {
  const [selected, setSelected] = useState();

  const handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  const PieDataInfo = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const BarData = [
    {
      name: "20 August",
      Duration: 30,
    },
    {
      name: "21 August",
      Duration: 40,
    },
    {
      name: "22 August",
      Duration: 120,
    },
    {
      name: "23 August",
      Duration: 75,
    },
  ];

  return (
    <div className="px-10 py-20">
      <div className="flex gap-5 mb-5">
        <div className="bg-transparent border border-violet-700 shadow-2xl w-full rounded-md">
          <div className="flex justify-between items-center mt-5 px-5">
            <h2 className="text-2xl">Progress Overview</h2>
            <div>
              <FaInfoCircle
                className="text-xl text-white"
                onClick={() => window.my_modal_2.showModal()}
              ></FaInfoCircle>
              <dialog id="my_modal_2" className="modal ">
                <form
                  method="dialog"
                  className="modal-box primary-bg border border-violet-400"
                >
                  <p className="py-4 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius atque similique ex blanditiis illo qui repellat!
                    Nesciunt delectus et vitae corporis a vero dolorum
                    blanditiis consectetur labore optio placeat deleniti ipsa,
                    laboriosam sequi quod officia ducimus beatae? Eos voluptas
                    veritatis sed consequuntur delectus, maxime illo ad totam
                    reiciendis nemo repellendus?
                  </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div className="px-5">
            <div className="flex  ">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={PieDataInfo}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Pie
                  dataKey="value"
                  data={PieDataInfo}
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#82ca9d"
                />
                <Tooltip />
              </PieChart>
              <div
                className="px-5 pt-36 
              "
              >
                <h2 className="flex items-center gap-3 ">
                  <FaFileSignature className="text-xl text-white"></FaFileSignature>
                  Quiz Mark
                </h2>

                <h2 className="flex items-center gap-3 ">
                  <FaVideo className="text-xl text-white"></FaVideo>Multimedia mark
                </h2>

                <h2 className="flex items-center gap-3 pt-2">
                  <FaFileAlt className="text-xl text-white"></FaFileAlt>
                  Assignment Mark
                </h2>
                <h2 className="flex items-center gap-3 pt-2">
                  <FaListAlt className="text-lg text-white"></FaListAlt>All Exam
                  Mark
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent border border-violet-700 shadow-2xl w-full rounded-md p-5">
          <h2 className="text-2xl">Quiz Participation</h2>
          <div className="flex items-center gap-1">
            <div>
              <PieChart width={400} height={400}>
                <Pie
                  data={PieDataInfo}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={PieDataInfo}
                  dataKey="value"
                  cx="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </div>
            <div className="text-white">
              <h2 className="flex items-center gap-3 mb-2">
                <FaRegDotCircle></FaRegDotCircle> Complete Quiz
              </h2>
              <h2 className="flex items-center gap-3 mb-2">
                {" "}
                <FaRegDotCircle></FaRegDotCircle> Incomplete Quiz
              </h2>
              <h2 className="flex items-center gap-3 ">
                <FaRegDotCircle></FaRegDotCircle> Total Mark
              </h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex gap-5 rounded-md">
        <div className="bg-transparent border border-violet-700 shadow-2xl md:w-1/3 w-full rounded-md p-5">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Module Finish Track
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <FaInfoCircle
                className="text-xl text-white "
                onClick={() => window.my_modal_1.showModal()}
              ></FaInfoCircle>

              <dialog id="my_modal_1" className="modal ">
                <form
                  method="dialog"
                  className="modal-box bg-gradient-to-r from-[#3c1053] to-[#ad5389] ..."
                >
                  <p className="py-4 text-white">
                    মডিউল রিলিজের ২৪ ঘণ্টার মধ্যে কমপ্লিট করা হলে, তা কাউন্ট করা
                    হচ্ছে।
                  </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div className="ms-16 mt-16">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>

        <div className="md:w-2/3 p-5 bg-transparent border border-violet-700 shadow-2xl w-full rounded-md">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Video Duration
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <select className="select bg-transparent border border-violet-700">
                <option selected className="ps-10 ">
                  Weekly
                </option>
                <option>Monthly</option>
              </select>
              <FaInfoCircle
                className="text-xl text-white "
                onClick={() => window.my_modal_1.showModal()}
              ></FaInfoCircle>

              <dialog id="my_modal_1" className="modal ">
                <form
                  method="dialog"
                  className="modal-box bg-gradient-to-r from-[#3c1053] to-[#ad5389] ..."
                >
                  <p className="py-4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores!
                  </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div className="bg-white/20 flex items-center gap-2 rounded-md p-2 mt-2 text-sm w-2/6 ps-6 mb-10">
            <FaStopwatch className="text-xl text-white shadow-2xl"></FaStopwatch>
            <h1 className="text-white">Total: 366 Hours and 16 Minutes.</h1>
          </div>

          <div>
            <BarChart
              width={900}
              height={300}
              data={BarData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 60, right: 40 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="Duration" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
