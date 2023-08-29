import "./Authentication.css";
import React, { useEffect, useState, useContext } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../Hooks/SocialLogin/SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";

const Login = () => {
  //code verification
  const [passShow, setPassShow] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const { logInUser, loading } = useContext(AuthContext);

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
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />
  }
  
  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
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
      <div className="min-h-screen hero">
        <div className="items-center justify-between gap-12 px-3 md:flex">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
          </div>
          <div className="flex-shrink-0 w-full bg-transparent border border-black rounded-lg shadow-xl md:w-1/2 card backdrop-blur-sm">
            <div className="text-center ">
              <h1 className="my-5 text-4xl font-bold text-white">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="font-bold label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="bg-transparent input input-bordered"
                  />
                  {errors.email && (
                    <span className="mt-1 text-red-500">
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
                    className="bg-transparent input input-bordered"
                  />
                  <div className="flex justify-between mb-5 ">
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
                    // disabled={!isButtonEnable}
                    className="btn btn-primary "
                    type="submit"
                    value={"Login"}
                  />
                </div>
              </form>
              {/* <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
                <p className="w-1/3 px-2 py-1 mx-auto text-center text-white bg-green-500 rounded-lg md:w-full">
                  {" "}
                  {randomNumbers.join(" ")}
                </p> */}
                {/* varification input field */}
                {/* <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Type Number"
                  className="input input-sm w-[117px] md:w-full mx-auto input-bordered bg-transparent"
                />
              </div> */}
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