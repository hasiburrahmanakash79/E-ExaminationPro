import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaQuestion } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Piechart from "./Piechart";

const data = [
  {
    name: "Week 1",
    MCQ: 400,
    "Short-Q": 240,
    "Long-Q": 240,
  },
  {
    name: "Week 2",
    "Short-Q": 300,
    MCQ: 139,
    "Long-Q": 221,
  },
  {
    name: "Week 3",
    "Short-Q": 200,
    MCQ: 480,
    "Long-Q": 229,
  },
  {
    name: "Week 4",
    "Short-Q": 278,
    MCQ: 390,
    "Long-Q": 200,
  },
  {
    name: "Week 5",
    "Short-Q": 189,
    MCQ: 480,
    "Long-Q": 218,
  },
  {
    name: "Week 6",
    "Short-Q": 239,
    MCQ: 380,
    "Long-Q": 250,
  },
  {
    name: "Week 7",
    "Short-Q": 349,
    MCQ: 430,
    "Long-Q": 210,
  },
];

const AdminHome = () => {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Admin home</h1>
        <button className="px-2 rounded-md btn-primary">Generate report</button>
      </div>
      <div className="grid grid-cols-1 gap-3 pb-6 mt-4 md:grid-cols-4">
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-green-300 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105">
          <div>
            <h2>Students</h2>
            <h1>200</h1>
          </div>
          <PiStudentBold fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-violet-300 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Instructors</h2>
            <h1>30</h1>
          </div>
          <FaChalkboardTeacher fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-cyan-300 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Questions</h2>
            <h1>700</h1>
          </div>
          <FaQuestion fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-x-zinc-400 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Answers</h2>
            <h1>900</h1>
          </div>
          <RiQuestionAnswerLine fontSize={28} />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="basis-[70%] my-8 w-full gap-6 shadow-xl rounded-md cursor-pointer border border-violet-900 p-3">
          <div>
            <h2 className="pb-3 text-center">Questions Overview</h2>
          </div>
          <div>
            <BarChart
              width={650}
              height={350}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="MCQ" fill="#8884d8" />
              <Bar dataKey="Short-Q" fill="#82ca9d" />
              <Bar dataKey="Long-Q" fill="#fcba03" />
            </BarChart>
          </div>
        </div>
        <div className="basis-[30%] my-8 w-full gap-6 shadow-xl rounded-md cursor-pointer border border-violet-900 p-3">
          <div>
            <h2 className="text-center">Users Overview</h2>
          </div>
          <div>
            <Piechart></Piechart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
