import React from "react";
import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure.jsx/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const img_token = import.meta.env.VITE_Image_Key;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`;

  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    data: info,
    refetch,
    isLoading: p_loading,
  } = useQuery({
    queryKey: ["profile_Info", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      console.log(res);
      return res.data;
    },
  });
  console.log(info);

  const onSubmitData = (event) => {
    event.preventDefault();

    const form = event.target;
    const batch = form.batch.value;
    const mobile = form.mobile.value;
    const address = form.address.value;
    const gender = form.gender.value;
    const data = { batch, mobile, address, gender };
    const formData = new FormData();

    formData.append("image", form.image.files[0]);
    console.log(formData);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const data2 = { photoURL: imgURL, ...data };
          console.log(data2);
          axiosSecure
            .patch(`/updateProfile?email=${user?.email}`, data2)
            .then((data) => {
              console.log(data);
              if (data.data.modifiedCount) {
                refetch();
                console.log("updated");
                Swal.fire({
                  showConfirmButton: false,
                  timer: 1500,
                  title: "Login Successful",
                  icon: "success",
                });
              }
            });
        }
      });
  };

  if (p_loading) {
    return <Loading />;
  }

  return (
    <div className="navigation-bar2 md:mx-20">
      <h1 className="mx-4 mt-4 text-2xl">Edit Profile:</h1>
      <div className="mx-auto card">
        <div className="card-body">
          
          <form
            onSubmit={onSubmitData}
            className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2"
          >
            <div className="flex flex-col text-center lg:text-left ">
              <div className="mx-auto w-80">
                <img
                  src={info?.photoURL}
                  className="p-3 mb-2 border-2 rounded-lg border-violet-600"
                  alt=""
                />
                <Link to="/updateProfilePicture">
                <button className="items-center px-24 py-3 mx-auto my-5 border-2 rounded-lg form-control border-violet-600">
                  {/* <input
                    name="image"
                    type="file"
                    className="w-full col-span-5 bg-transparent file-input"
                  /> */}
                   Update Picture
                </button>
                 </Link>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-6 mt-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Name:</span>
                </label>
                <h1 className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200">
                  {info?.displayName}
                </h1>
              </div>

              <div className="grid grid-cols-6 my-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Email:</span>
                </label>
                <h1 className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200">
                  {info?.email}
                </h1>
              </div>
              <div className="grid grid-cols-6 my-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Batch:</span>
                </label>
                <input
                  name="batch"
                  className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200"
                />
              </div>
              <div className="grid grid-cols-6 my-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Gender:</span>
                </label>
                <input
                  name="gender"
                  className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200"
                />
              </div>
              <div className="grid grid-cols-6 my-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Address:</span>
                </label>
                <input
                  name="address"
                  className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200"
                />
              </div>
              <div className="grid grid-cols-6 my-2 form-control">
                <label className="col-span-1 label">
                  <span className="text-white label-text">Mobile:</span>
                </label>
                <input
                  className="col-span-5 shadow-lg input input-sm text-slate-900 bg-slate-200"
                  name="mobile"
                />
              </div>
              <div className="mt-6 form-control">
                <input
                  type="submit"
                  className="w-1/2 mx-auto btn btn-primary"
                  value="Update Profile"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
