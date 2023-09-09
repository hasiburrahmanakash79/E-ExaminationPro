import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { useEffect } from "react";


const UpcomingLiveExam = () => {
  const [msg, setMsg] = useState('')
  const [isActive,setActive]=useState(true)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const e_ID = searchParams.get('examID')
  console.log(e_ID)
  const { user, loading } = useContext(AuthContext)

  const [axiosSecure] = useAxiosSecure()
  const { data,refetch, isLoading } = useQuery({
    queryKey: ['noticeDATA', e_ID],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`notice?id=${e_ID}&student_email=${user?.email}`);
      return res.data;
    }
  })
  console.log(data)


  const { data: studentData, isLoading: dataloding } = useQuery({
    queryKey: ['studentInfo', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users?email=${user?.email}`);
      return res.data;
    }
  })


  console.log(studentData,'line 38')
  const data1 = { examID: e_ID,examCode:data?.exam_code, subjectName: data?.subjectName, subject_code: data?.subject_code, student_name: user?.displayName, student_email: user?.email, date: data?.date, instuctor_email: data?.email, group: data?.group }

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setMsg('')

    const info = { ...data1, ...data }



      fetch(`https://e-exam-pro-server.vercel.app/appliedLiveExam?examId=${e_ID}&studentEmail=${user?.email}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setMsg('Successfully Applied')
            refetch()
          }
          else if(data.msg){
            setActive(false)
            setMsg(data.msg)
          }
        })
    




  }

  return (
    <div>
      <div className="mt-6 text-2xl font-semibold text-center">Apply for Online Exam</div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[600px] border-4 border-purple-900 rounded-xl p-4 my-4">
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Subject</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{data?.subjectName}</h1>
        </div>

        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Subject Code</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{data?.subject_code}</h1>
        </div>


        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Name</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{user?.displayName}</h1>
        </div>
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Email</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{user?.email}</h1>
        </div>

        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold label-text">Batch</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{studentData?.batch ? studentData?.batch : <span className="text-red-500">Please add batch in update profile</span>}</h1>
        </div>

        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold label-text">Date</span>
          </label>
          <h1 className="w-full input flex items-center input-bordered ">{data?.date}</h1>
        </div>
        <div className="flex justify-center w-full mt-4"> {/* Add 'mt-4' for top margin */}
          <input disabled={!studentData?.batch || data?.msg} className="primary-btn btn" type="submit" value="Apply for Exam" />
        </div>
        <p className="text-green-600 text-center">{msg}</p>
        {
          data?.msg && <h1 className="text-xl text-center mt-2 text-red-600">You Have Already Applied</h1>
        }
      </form>
    </div>
  );
};

export default UpcomingLiveExam;