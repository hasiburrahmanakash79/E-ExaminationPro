<<<<<<< HEAD
import { useState } from "react";
import { Helmet } from "react-helmet-async";
=======
import { useContext, useState } from "react";

>>>>>>> 49823edac291a04f5e8c1c237819d5b85407383c
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AppliedLiveExam = () => {

  const { user, loading } = useContext(AuthContext)
  const [code,setCode]=useState(null)
  const [axiosSecure] = useAxiosSecure()
  const { data: appliedExam, refetch, isLoading } = useQuery({
    queryKey: ['notice', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`appliedLiveExam?studentEmail=${user?.email}`);
      return res.data;
    }
  })
  console.log(appliedExam)

  const getCode = (id, code) => {
    fetch(`http://localhost:5000/liveQuestionPaper?id=${id}&examCode=${code}`)
      .then(res => res.json())
      .then(code => setCode(code.code))
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-center items-center">
      <Helmet><title>E-ExamPro | Apply Live Exam </title></Helmet>
=======
    <div className="flex flex-col ">
>>>>>>> 49823edac291a04f5e8c1c237819d5b85407383c
      <h2 className="text-2xl">AppliedLiveExam</h2>
      {
        appliedExam?.map(exam => <div key={exam._id} className=" w-full grid grid-cols-1">
          <div  className="  card mx-5 mt-5 md:mx-20 navigation-bar  shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Subject: {exam.subjectName}</h2>
              <p>ExamCode: {exam?.examCode}</p>
              <p>Subject Code: {exam?.subject_code}</p>

              <div className="flex  justify-end">
                <div>
                  <p className="mb-2">Date: {exam?.date}</p>

                  <div className="grid grid-cols-2 ">
                    <h1 className="text-red-500 ">Code: </h1>
                   { code==null?
                   <button onClick={() => getCode(exam?.examID, exam?.examCode)} className="btn btn-sm">Get Code</button>
                  :
                  <button  className="btn btn-sm bg-white text-black hover:bg-white">{code}</button>
                  }
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }

    </div>
  );
};

export default AppliedLiveExam;
