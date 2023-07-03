import React, { useEffect, useState } from "react";
import { Cart, Header, Lrp } from "../component/component";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";

import getRental from "../service/rental/getRental";
import getUser from "../service/user/getUserById";
import updateUser from "../service/user/updateUser";

const Profile = () => {
  const [pdata, setPData] = useState([]);
  const [uData, setUData] = useState({});

  const getDetails = () => {
    async function getdetail() {
      try {
        const res = await getRental();

        if (!res) {
          throw new Error();
        }
        setPData(res);
      } catch (error) {
        toast.error("Could Not Load Data !!");
      }
    }
    getdetail();
  };
  const getProfileDetails = () => {
    async function getdetail() {
      try {
        const res = await getUser();

        if (!res) {
          throw new Error();
        }

        setUData(res);
      } catch (error) {
        toast.error("Could Not Load Data !!");
      }
    }
    getdetail();
  };
  useEffect(() => {
    getProfileDetails();
    getDetails();
  }, []);

  return (
    <div className="">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div className="bg-[#333] w-full lg:pt-[15vh] pt-[20vh] text-center">
        <h1 className="text-white text-[1.5rem] tracking-wider font-bold">
          Profile Page
        </h1>
        <div className="grid grid-cols-1  gap-20 lg:gap-5  w-[80%] m-auto">
          <div>
            <div className="text-blue-500 my-3 pt-4 border-t-2 flex flex-col md:flex-row gap-5 justify-center items-center md:gap-20">
              <p>
                User Name:{" "}
                <span className="text-neutral-100 ">{uData?.name}</span>
              </p>
              <div className="w-[50px] h-[2px] bg-blue-600"></div>
              <p>
                Contact:{" "}
                <span className="text-neutral-100 ">{uData?.contact}</span>
              </p>
              <div className="w-[50px] h-[2px] bg-blue-600"></div>
              <p>
                Email: <span className="text-neutral-100 ">{uData?.email}</span>
              </p>
            </div>
          </div>
          <div className=" w-full shadow-xl bg-neutral-100 m-auto h-[70vh] lg:h-[70vh] rounded-xl">
            <div className="w-[90%] m-auto  py-5">
              <h1 className="underline underline-offset-8">
                You Recent Transactions
              </h1>
              <div className="mt-3 grid grid-cols-1 gap-3 h-[60vh] lg:h-[55vh] lg:mt-8 overflow-auto ">
                {pdata.map((e) => {
                  return (
                    <Cart
                      name={e.listingId?.name}
                      date={e.rentalId?.selected_pick_up_date}
                      location={e.rentalId?.selected_pick_up_location}
                      payment={e.rentalId?.payment}
                      quantity={e.rentalId?.quantity}
                      image={e.listingId?.image}
                      duration={e.rentalId?.duration}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
