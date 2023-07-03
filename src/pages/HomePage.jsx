import React, { useEffect, useState } from "react";
import { Header, Lrp } from "../component/component";
import { SiMinutemailer } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

import "./css/homepage.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  setTimeout(() => {
    setIsVisible(true);
  }, 300);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-auto">
      <div>
        <div className="z-[1]   fixed top-5 left-0 right-0">
          <Header />
        </div>
        <div className="z-[1] fixed   top-[90px] md:top-7 right-5">
          <Lrp />
        </div>
        <div className="homepage-image w-full pt-[35vh] h-[100vh] text-center">
          <div className="w-[80% ] m-auto flex items-center justify-center flex-col ">
            <h1
              className={`leading-[1.1em] mb-4 tracking-tight  title-font text-[2.9rem] md:text-[4rem] lg:text-[6rem] transition-opacity transition-transform duration-3000 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-x-0 duration-[1s]"
                  : "opacity-0 -translate-x-full duration-[1s]"
              }`}
            >
              Pokhara Rental Service
            </h1>
            <p className="text-white text-[.9rem]">
              Rent a boat or cycle in Pokhara Lakeside and embark on
              unforgettable adventures along the serene lakeshore
            </p>

            <button className="btn rounded-xl text-white py-3 px-7 shadow-lg bg-blue-600 mt-5">
              <a href="#service"> Explore More</a>
            </button>
          </div>
        </div>
      </div>

      <div id="service" className="  bg-[#333]  w-[100%]">
        <div className="h-[70vh]  bg-white grid center">
          <div className="grid gap-2 grid-cols-2 w-[80%] m-auto items-center justify-between">
            <div className="">
              <img src="image/cycle.png" className="w-[30rem]  " alt="" />
            </div>
            <div className="text-align ">
              <h1 className=" text-[3rem] tracking-tight">CYCLE</h1>
              <p className=" leading-[1.2em] ">
                Explore your surroundings at your own pace with our reliable
                cycle rental services.
              </p>
              <button
                onClick={() => {
                  navigate("/rent/1");
                }}
                className="btn rounded-xl border-[1px] mt-5 hover:text-white  py-3 px-7 shadow-lg"
              >
                Rent A Cycle
              </button>
            </div>
          </div>
        </div>

        <div className="h-[70vh] grid center bg-blue-500 overflow-hidden ">
          <div className="grid gap-2  grid-cols-2 w-[80%] m-auto items-center justify-between">
            <div className="">
              <img src="image/boat.png" className="w-[30rem]" alt="" />
            </div>
            <div className="text-align ">
              <h1 className="text-white text-[3rem] tracking-tight ">BOAT</h1>
              <p className="text-white leading-[1.2em]">
                Rent a boat from us and set sail on your next adventure,
                creating memories that will last a lifetime.
              </p>
              <button
                onClick={() => {
                  navigate("/rent/2");
                }}
                className="btn rounded-xl border-[1px] mt-5 text-white py-3 px-7 shadow-lg"
              >
                Rent A Boat
              </button>
            </div>
          </div>
        </div>

        <div className=" grid center py-20 gap-20">
          <h1 className="text-center text-white text-[3rem]">Contact Us</h1>
          <div className="grid gap-10  grid-cols-1 md:grid-cols-3 w-[80%] m-auto items-center justify-between">
            <div className="grid gap-5">
              <span className="bg-white m-auto text-[2rem] rounded-[100%] p-5">
                <SiMinutemailer />
              </span>
              <div className="text-white m-auto">
                <p>
                  <span className="font-medium text-[1.1rem] text-blue-400 mr-2">
                    Email :
                  </span>
                  pokharaRental@gmail.com
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <span className="bg-white m-auto text-[2rem] rounded-[100%] p-5">
                <AiFillPhone />
              </span>
              <div className="text-white m-auto">
                <p>
                  <span className="font-medium text-[1.1rem] text-blue-400 mr-2">
                    Phone :
                  </span>
                  9803412314
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <span className="bg-white m-auto text-[2rem] rounded-[100%] p-5">
                <BiCurrentLocation />
              </span>
              <div className="text-white m-auto">
                <p>
                  <span className="font-medium text-[1.1rem] text-blue-400 mr-2">
                    Location :
                  </span>
                  Parsynag-5, Pokhara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
