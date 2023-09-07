import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const JoinLiveExam = () => {
  const { register, handleSubmit, reset } = useForm();

  const cancelSubmit = () => {
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <div className="md:w-1/4 mx-auto border-4 p-7 rounded-2xl mt-10 border-violet-700">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col ">
            <h2 className="text-center text-2xl my-3">Live Exam Join Code</h2>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Please enter your join Code"
              className="bg-white/10 rounded-md input input-bordered"
            />
          </div>

          <div className="mt-5 flex justify-end gap-5">
            <div className="mt-5 ">
              <button
                onClick={() => cancelSubmit()}
                className="btn primary-bg"
                type="submit"
              >
                Cancel
              </button>
            </div>
            <div className="mt-5 ">
              <Link to="/examRoom">
                  <button className="btn primary-btn" type="submit">
                    Submit
                  </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinLiveExam;
