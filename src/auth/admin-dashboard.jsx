import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import getAllCount from "../service/getAllCount";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const [details, setDetails] = useState({});
  const getDetails = async () => {
    try {
      const res = await getAllCount();
      if (!res) {
        throw new Error("");
      }
      setDetails(res);
    } catch (error) {
      toast.error("Could not load Data");
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="md:absolute   m-0 mx-auto py-20 lg:right-0 lg:py-7 w-[95%] m-auto lg:w-[75%] ">
      <div className="w-[88%] md:w-[80%] m-auto grid gap-4">
        <div className="w-full items-center justify-center   grid grid-cols-1 gap-8  md:grid-cols-2 md:gap-4 lg:gap-5">
          <div className=" mt-10 aspect-video w-[70%] md:w-full   m-auto bg-[#333] rounded-md shadow-xl ">
            <div className="relative p-5 text-white h-full flex flex-col justify-between ">
              <div className="absolute top-0  shadow-xl bg-red-600 p-7 rounded-full   transform translate-y-[-50%]">
                <FaClipboardList className="text-[2.2rem]" />
              </div>
              <div className="w-full text-right">+12</div>
              <div className=" items-center flex justify-between">
                <p className="text-[1.5rem]  ">Listing </p>{" "}
                <div className="h-[1px] w-[20px] bg-white"></div>
                <p className="  text-[1.5rem]">{details?.listingCount}</p>
              </div>
            </div>
          </div>
          <div className="  w-[70%] md:w-full   m-auto mt-10 aspect-video  bg-[#333] rounded-md shadow-xl ">
            <div className="relative p-5 text-white h-full flex flex-col justify-between ">
              <div className="absolute top-0  shadow-xl bg-red-600 p-7 rounded-full   transform translate-y-[-50%]">
                <MdOutlinePayments className="text-[2.2rem]" />
              </div>
              <div className="w-full text-right">+12</div>
              <div className=" items-center flex justify-between">
                <p className="text-[1.5rem]  ">Payment </p>{" "}
                <div className="h-[1px] w-[20px] bg-white"></div>
                <p className="  text-[1.5rem]">{details?.rentalCount}</p>
              </div>
            </div>
          </div>
          <div className="  w-[70%] md:w-full  m-auto mt-10 aspect-video  bg-[#333] rounded-md shadow-xl ">
            <div className="relative p-5 text-white h-full flex flex-col justify-between ">
              <div className="absolute top-0  shadow-xl bg-red-600 p-7 rounded-full   transform translate-y-[-50%]">
                <HiUsers className="text-[2.2rem]" />
              </div>
              <div className="w-full text-right">+12</div>
              <div className=" items-center flex justify-between">
                <p className="text-[1.5rem]  ">Users </p>{" "}
                <div className="h-[2px] w-[20px] bg-white"></div>
                <p className="  text-[1.5rem]">{details?.userCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
