import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../Hooks/SocialLogin/SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";

const Registration = () => {
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signUpUser, updateUserInfo } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    signUpUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedUser);
    });
  };
  return (
    <div className="Auth_bg">
      <div className="hero min-h-screen">
        <div className="md:flex justify-between items-center gap-10 px-3">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
          </div>
          <div className="md:w-1/2 rounded-lg card border border-black flex-shrink-0 w-full shadow-xl backdrop-blur-sm bg-transparent">
            <div className=" text-center">
              <h1 className="text-4xl my-5 font-bold text-white">
                Registration
              </h1>
            </div>
            <div className="card-body text-white">
              <form onSubmit={handleSubmit(onSubmit)} className="!text-white">
                <div className="md:grid grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered bg-transparent"
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered bg-transparent"
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: "Password field is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      type={passShow ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input input-bordered bg-transparent"
                    />
                    <label className="label">
                      <a className="label-text-alt link link-hover">
                        <p onClick={() => setPassShow(!passShow)}>
                          <small>
                            {passShow ? (
                              <span>Hide Pass</span>
                            ) : (
                              <span>Show Pass</span>
                            )}
                          </small>
                        </p>
                      </a>
                    </label>
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      {...register("confirm", {
                        required: "Confirm password field is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      type={passShow ? "text" : "password"}
                      placeholder="Confirm password"
                      className="input input-bordered bg-transparent"
                    />
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Contact Number</span>
                    </label>
                    <input
                      {...register("number", { required: true })}
                      type="number"
                      placeholder="+880"
                      className="input input-bordered bg-transparent"
                    />
                    {errors.number && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      {...register("photo", { required: true })}
                      type="text"
                      placeholder="Photo URL"
                      className="input input-bordered bg-transparent"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Enter your Address"
                    className="input input-bordered bg-transparent"
                  />
                </div>
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Registration</button>
                </div>
              </form>
              <div className="text-center">
                <div className="divider divide-red-50"></div>
                <p className="font-semibold">Or Sign In with</p>
                <div className="flex items-center justify-center gap-4 my-2">
                  <SocialLogin></SocialLogin>
                </div>
                <p>
                  Already Have Any Account?{" "}
                  <Link className="link link-hover" to="/login">
                    Click Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
