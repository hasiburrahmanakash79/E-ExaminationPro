import React from "react";
import Modal from "../../Pages/ModalUI/Modal";
import { useForm } from "react-hook-form";

const LiveExamModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const cancelSubmit = () => {
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title="Enter Live Exam" className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col ">
          <label>
            <span>Enter Code</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter Code"
            className="bg-transparent rounded-md input input-bordered"
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
            <button className="btn primary-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default LiveExamModal;
