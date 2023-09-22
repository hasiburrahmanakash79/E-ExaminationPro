import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaQuestion } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import React, { PureComponent, useEffect, useState } from "react";
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
import { Helmet } from "react-helmet-async";



const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/allQuestions')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])
  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/allResults')
      .then(res => res.json())
      .then(data => setAnswers(data))
  }, [])
  const students = users.filter(student => student.role === "user");
  const instructorsD = users.filter(instructor => instructor.role === "instructor");
  const MCQs = questions.filter(mcq => mcq.type === "mcq");
  // TO-DO make question quantity dynamic
  const ShortQ = questions.filter(short => short.type === "mcq");
  const LongQ = questions.filter(long => long.type === "mcq");


  const data = [
    {
      name: "Type of Questions",
      MCQ: MCQs.length,
      "Short-Q": 1,
      "Long-Q": 2,
    },
    
  ];

  return (
    <div className="px-4 pt-4">
      <Helmet><title>Dashboard | E-ExamPro</title></Helmet>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Admin home</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 pb-6 mt-4 md:grid-cols-4">
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 border-green-300 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105">
          <div>
            <h2>Students</h2>
            <h1>{students.length}</h1>
          </div>
          <PiStudentBold fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-violet-300 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Instructors</h2>
            <h1>{instructorsD.length}</h1>
          </div>
          <FaChalkboardTeacher fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-cyan-300 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Questions</h2>
            <h1>{questions.length}</h1>
          </div>
          <FaQuestion fontSize={28} />
        </div>
        <div className="flex items-center justify-between h-20 px-4 mx-3 transition duration-300 ease-out transform border-l-4 rounded-lg cursor-pointer border-x-zinc-400 hover:shadow-lg hover:scale-105">
          <div>
            <h2>Answers</h2>
            <h1>{answers.length}</h1>
          </div>
          <RiQuestionAnswerLine fontSize={28} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="basis-[70%] my-8 w-full gap-6 shadow-xl rounded-md cursor-pointer border border-violet-900 p-3">
          <div>
            <h2 className="pb-3 text-center">Questions Overview</h2>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={350}>
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
            </ResponsiveContainer>
          </div>
        </div>
        <div className="basis-[30%] my-8 w-full gap-6 shadow-xl rounded-md cursor-pointer border border-violet-900 p-3">
          <div>
            <h2 className="text-center">Users Overview</h2>
          </div>
          <div>
            <Piechart students={students} instructorsD={instructorsD}></Piechart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
