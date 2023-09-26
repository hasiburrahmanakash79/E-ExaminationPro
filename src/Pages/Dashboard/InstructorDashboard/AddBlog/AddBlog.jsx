import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddBlog = () => {
  const handleBlogAdding = (event) => {
    event.preventDefault();
    const form = event.target;
    const image_url = form.image_url.value;
    const title = form.title.value;
    const publishing_date = form.publishing_date.value;
    const content = form.content.value;
    const instructorName = form.instructorName.value;

    const order = {
      image_url,
      instructorName,
      title,
      publishing_date,
      content,
    };
    //console.log(order)

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: "middle-center",
            icon: "success",
            title: "Added Successfully",
            showConfirmButton: true,
            timer: 1500,
          });
        }

        form.reset();
      });
  };

  return (
    <div className="p-5 text-center">
      <Helmet>
        <title>E-ExamPro | Add Blog </title>
      </Helmet>

      <div className="md:w-2/3 mx-auto p-5 rounded-xl   shadow-md mt-14">
        <h2 className="my-10 text-3xl">Add Blog</h2>
        <form onSubmit={handleBlogAdding} className="text-center">
          <div className="grid gap-5 p-5 md:grid-cols-2 ">
            <div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="image_url"
                placeholder="Photo URL"
                className="w-full input input-bordered  ag-transparent"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                className="w-full input input-bordered  ag-transparent"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Publishing Date</span>
              </label>
              <input
                type="date"
                name="publishing_date"
                placeholder="Publishing Date"
                className="w-full input input-bordered  ag-transparent"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Publisher Name</span>
              </label>
              <input
                type="text"
                name="instructorName"
                placeholder="Publisher Name"
                className="w-full input input-bordered  ag-transparent"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Blog Description</span>
              </label>
              <textarea
                className="w-full textarea textarea-bordered  ag-transparent"
                name="content"
                placeholder="Blog Description"
                required
              ></textarea>
            </div>
          </div>
          <div>
            <input
              className="btn btn-primary btn-sm mb-10"
              type="submit"
              value="Add New Blog"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
