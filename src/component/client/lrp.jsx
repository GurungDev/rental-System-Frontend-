import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { store } from "../../redux/store";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Lrp = () => {
  const state = store.getState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-5 items-center justify-center">
      <div
        className={`${
          !state?.user?.loginStatus ? "" : "hidden"
        } p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 hover:rotate-180`}
      >
        <Link to="/login">
          <BiLogInCircle />
        </Link>
      </div>{" "}
      <div>
        <div
          onClick={() => navigate("/profile")}
          className={`${
            state?.user?.loginStatus ? "" : "hidden"
          } p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 `}
        >
          <CgProfile />
        </div>
      </div>
      <div
        className={`${
          state?.user?.loginStatus ? "" : "hidden"
        } p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 hover:rotate-180`}
        onClick={() => {
          toast.success("logged Out");
          dispatch(resetLogin());
          window.location.reload();
        }}
      >
        <BiLogOutCircle />
      </div>
    </div>
  );
};

export default Lrp;
