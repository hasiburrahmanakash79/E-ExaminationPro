import React from "react";
import { useForm } from "react-hook-form";
import { LocalToastTarget, useLocalToast } from "react-local-toast";

const CreateSubject = () => {
  const { showToast, removeToast } = useLocalToast();
  const img_token = import.meta.env.VITE_Image_Key;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // if (loading) {
  //   return <Loading />
  // }

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        const imgURL = imgResponse.data.display_url;
        const subjectInfo = {
          subject_name: data.subject,
          subject_code: data.code,
          description: data.descrip,
          img_link: imgURL,
        };
        if (imgResponse.success === true) {
          console.log(subjectInfo);
          fetch("https://e-exam-pro-server.vercel.app/allsubjects", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Corrected header name
            },
            body: JSON.stringify(subjectInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                showToast("btn", "Subject Created", { type: "success" });
              } else {
                showToast("btn", "Subject Duplicated", { type: "error" });
              }
            });
        }
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center my-5">Add Subject</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="border md:w-1/2 mx-auto md:p-10 p-5 rounded-2xl">
        <div className="form-control">
          <label className="label">
            <span className="font-bold label-text">Subject Name</span>
          </label>
          <input
            {...register("subject", { required: true })}
            type="text"
            placeholder="Subject Name"
            className="bg-transparent input input-bordered"
          />
          {errors.subject && (
            <span className="mt-1 text-red-500">Subject field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject Code</span>
          </label>
          <input
            {...register("code", { required: true })}
            placeholder="Subject code"
            className="bg-transparent input input-bordered"
          />
          {errors.code && (
            <span className="mt-1 text-red-500">
              Subject Code field is required
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject Description</span>
          </label>
          <textarea
            placeholder="Subject Description"
            className="textarea textarea-bordered bg-transparent"
            {...register("descrip", { required: true })}
          />
          {errors.descrip && (
            <span className="mt-1 text-red-500">
              Description field is required
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject Image</span>
          </label>
          <div className="form-control rounded-lg border-2 border-violet-600 items-center ">
            <input
              {...register("image", { required: true })}
              name="image"
              type="file"
              className=" col-span-5 file-input w-full bg-transparent"
            />
          </div>
          {errors.image && (
            <span className="mt-1 text-red-500">Image field is required</span>
          )}
        </div>
        <div className="form-control ">
          <LocalToastTarget name="btn">
            <input
              // disabled={!isButtonEnable}
              className="btn mt-8 btn-warning "
              type="submit"
              value={"Add Subject"}
            />
          </LocalToastTarget>
        </div>
      </form>
    </div>
  );
};

export default CreateSubject;
