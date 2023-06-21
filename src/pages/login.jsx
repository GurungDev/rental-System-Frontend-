import React, { useState } from "react";
import { AiFillEye, AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(true);
  return (
    <>
      <div className="relative bg-[#333] w-[100wh] min-h-[100vh] py-[4em]  md:py-3 flex justify-center items-center">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="fixed top-5 md:top-10 bg-white left-2 md:left-10 px-5 py-2 rounded-xl duration-200 shadow-lg cursor-pointer filter hover:brightness-[90%] flex items-center gap-5"
        >
          {" "}
          <AiOutlineArrowLeft className="text-[1.1rem]" />
          <span className="hidden md:inline">Go Back</span>
        </div>
        <div className=" w-[80vw] md:w-[50vw] lg:w-[30vw]  grid gap-10">
          <div
            className="text-white text-[2.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Pokhara Rentals
          </div>
          <div className=" pb-10 w-full rounded-2xl bg-white shadow-2xl">
            <div className="bg-white rounded-t-full  transform -translate-x-[0px] -translate-y-[50px] w-[140px] mt-3 px-7 pt-5">
              <h1 className="text-[1.2rem] text-center">Login</h1>
            </div>
            <div className="w-[80%]  ">
              <p className="text-center text-neutral-600 mb-2 border-b pb-2">
                Join us at{" "}
                <span
                  className="text-[blue] cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Pokhara Rentals!!
                </span>
                <br />
                Login Into Your Account
              </p>
              <form action="" className="w-full flex flex-col gap-5">
                <div className=" w-full flex flex-col justify-items-start text-left gap-2">
                  <label className=" text-[.9rem] w-full">Email</label>
                  <div className="w-full flex items-center justify-between bg-neutral-300 rounded py-2 px-1 hover:outline shadow hover:outline-blue-500">
                    <input
                      type="email"
                      placeholder="email@gmail.com"
                      className="w-[100%] bg-neutral-300 outline-none"
                      required
                    />
                  </div>
                </div>
                <div className=" w-full flex flex-col justify-items-start text-left gap-2">
                  <label className=" text-[.9rem] w-full">Password</label>
                  <div className="w-full flex items-center justify-between bg-neutral-300 rounded py-2 px-1 hover:outline shadow hover:outline-blue-500">
                    <input
                      type={showPw ? "password" : "text"}
                      placeholder="********"
                      className="w-[90%] bg-neutral-300 outline-none"
                      required
                    />{" "}
                    <AiFillEye
                      className="text-[1.5rem] cursor-pointer"
                      onClick={() => {
                        if (showPw) {
                          setShowPw(false);
                        } else {
                          setShowPw(true);
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-between">
                  <div className=" w-full flex items-center ">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember_me"
                      className="ml-2 block text-[.9rem] text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="w-full text-[.9rem] text-gray-900 duration-200 hover:text-[red] text-right">
                    <Link> Forgot your password?</Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[blue] w-full text-neutral-200 py-2 rounded shadow hover:bg-[red] duration-[.4s]"
                >
                  Sign In
                </button>

                <div className="flex justify-center items-center gap-2">
                  <div className="w-[90px] bg-neutral-300 h-[1px] "></div>
                  <div className="text-[.9rem] text-neutral-600">
                    Or Continue with
                  </div>
                  <div className="w-[90px] bg-neutral-300 h-[1px]"></div>
                </div>

                <div className="w-full border border-1 hover:shadow hover:border-neutral-500 border-neutral-300 px-1 py-2 rounded   duration-[.2s]">
                  <div className="flex gap-3 items-center justify-center w-[60%] ">
                    {" "}
                    <img
                      src="/image/googleIcon.png"
                      className="w-[30px] "
                      alt=""
                    />
                    <p className="w-full">Login With Google</p>
                  </div>
                </div>
              </form>

              <div className="text-[0.9rem] text-neutral-600 mt-7">
                <p>
                  Don't have an Account?{" "}
                  <span className="hover:text-[red] duration-200">
                    <Link to="/register">Register Now</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
