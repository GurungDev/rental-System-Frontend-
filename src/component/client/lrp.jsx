import { BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";

const Lrp = () => {
  return (
    <div className=" flex flex-col gap-5 items-center justify-center">
      <div className=" p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 hover:rotate-180">
        <Link to="/login">
          <BiLogInCircle />
        </Link>
      </div>

      <div className="hidden p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 hover:rotate-180">
        <CgProfile />
      </div>
      <div className=" hidden p-2 text-[2rem] bg-white w-[50px] rounded-[100%] shadow hover:scale-110 duration-300 hover:rotate-180">
        <BiLogInCircle />
      </div>
    </div>
  );
};

export default Lrp;
