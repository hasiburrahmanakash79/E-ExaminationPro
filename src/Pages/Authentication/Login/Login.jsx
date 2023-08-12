import "./Authentication.css";
import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../Hooks/SocialLogin/SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  //code verification
  const [passShow, setPassShow] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const { logInUser } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const newRandomNumbers = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    );
    setRandomNumbers(newRandomNumbers);
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setIsButtonEnable(event.target.value === randomNumbers.join(""));
  };
  //verification end

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 2000,
          title: "Login Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  return (
    <div className="Auth_bg">
      <div className="hero min-h-screen">
        <div className="md:flex justify-between items-center gap-12 px-3">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
          </div>
          <div className="md:w-1/2 rounded-lg card border border-black flex-shrink-0 w-full shadow-xl backdrop-blur-sm bg-transparent">
            <div className=" text-center">
              <h1 className="text-4xl my-5 font-bold text-white">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-transparent"
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-1">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type={passShow ? "text" : "password"}
                    placeholder="enter your password"
                    className="input input-bordered bg-transparent"
                  />
                  <div className=" flex justify-between mb-5">
                    <a onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </a>
                    <a href="#">Forgot password?</a>
                  </div>
                </div>
                <div className="form-control ">
                  <input
                    disabled={!isButtonEnable}
                    className="btn btn-primary "
                    type="submit"
                    value={"Login"}
                  />
                </div>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <p className="text-center bg-green-500 text-white w-1/3 md:w-full px-2 py-1 rounded-lg mx-auto">
                  {" "}
                  {randomNumbers.join(" ")}
                </p>
                {/* varification input field */}
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Type Number"
                  className="input input-sm w-[117px] md:w-full mx-auto input-bordered bg-transparent"
                />
              </div>
              <div className="text-center mb-7">
                <div className="divider divide-red-50"></div>
                <p className="font-semibold">Or Sign In with</p>
                <div className="flex items-center justify-center gap-4 my-2">
                  <SocialLogin></SocialLogin>
                </div>
                <p className="text-center">
                  Don't Have Any Account?{" "}
                  <Link className="link link-hover" to="/signUp">
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

export default Login;
