import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const UpcomingLiveExam = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const{user} = useContext(AuthContext)
    const onSubmit = ()=>{

        console.log("Submit live exam application");
    }
    return (
        <div>
            <div className="mt-6 text-2xl font-semibold text-center">Apply for Online Exam</div>
      <form onSubmit={handleSubmit(onSubmit)}  className="mx-auto max-w-[600px] border-4 border-purple-900 rounded-xl p-4 my-4">
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="Subject Name"
            {...register("subjectName", { required: true })}
            className="w-full input input-bordered "
          />{errors.name && (
            <span className="text-sm text-red-500">Subject Name is required</span>
          )}
        </div>
        
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Subject Code</span>
          </label>
          <input
            type="text"
            placeholder="Subject Code"
            {...register("subjectCode", { required: true })}
            className="w-full input input-bordered "
          />{errors.name && (
            <span className="text-sm text-red-500">Subject code is required</span>
          )}
        </div>

        
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Name</span>
          </label>
          <input
            type="text"
            value={user.displayName}
            {...register("userName", { required: true })}
            className="w-full input input-bordered "
          />
        </div>
        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="font-semibold label-text">Email</span>
          </label>
          <input
            type="text"
            value={user.email}
            {...register("userEmail", { required: true })}
            className="w-full input input-bordered "
          />
        </div>

        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold label-text">Batch</span>
          </label>
          <input
            type="number"
            {...register("batch", { required: true })}
            placeholder="Batch"
            className="w-full input input-bordered "
          />{errors.availableSeats && (
            <span className="text-sm text-red-500">Batch is required</span>)}
        </div>

        <div className="w-full form-control ">
          <label className="label">
            <span className="font-semibold label-text">Date</span>
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Date"
            className="w-full input input-bordered "
          />{errors.price && (
            <span className="text-sm text-red-500">Date is required</span>)}
        </div>
        <div className="flex justify-center w-full mt-4"> {/* Add 'mt-4' for top margin */}
    <input className="primary-btn btn" type="submit" value="Apply for Exam" />
  </div>
      </form>
    </div>
    );
};

export default UpcomingLiveExam;