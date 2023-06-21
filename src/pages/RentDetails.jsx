import React, { Fragment, useEffect, useState } from "react";
import { Header, Lrp } from "../component/component";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AiFillCaretDown } from "react-icons/ai";
import "./css/rentdetails.css";

import { Listbox, Transition } from "@headlessui/react";

const RentDetails = () => {
  const today = dayjs(new Date()).set("hour", 9).startOf("hour");
  const max_day = dayjs().add(10, "day");
  const location = [
    { name: "Select A Location" },
    { name: "Parsyang" },
    { name: "Lakeside" },
  ];
  const duration_list = [
    { name: "Select the duration for rent" },
    { name: "1 Hour" },
    { name: "3 Hour" },
    { name: "5 Hour" },
    { name: "10 Hour" },
  ];
  const quantity_list = [
    { name: "Select the quantity" },
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
  ];
  const [selected_pick_up_location, set_selected_pick_up_location] = useState(
    location[0]
  );
  const [selected_pick_up_date, set_selected_pick_up_date] = useState(today);
  const [duration, setDuration] = useState(duration_list[0]);
  const [quantity, setQuantity] = useState(quantity_list[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative ">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div className=" image w-full pt-[27vh] pb-20 text-center overflow-hidden">
        <div className="w-[95%] lg:w-[75%] flex items-center justify-center flex-col gap-5">
          <h1 className="text-[2rem] text-neutral-200 leading-20">
            Product Name
          </h1>

          <p className="text-neutral-200 border-b-[3px] w-full pb-5 px-5 text-center leading-7">
            Are you in search of a convenient, reliable, and hassle-free way to
            rent products and services? Look no further than RentMeNow, the
            ultimate online destination for all your rental needs. Whether
            you're planning a special event, embarking on a thrilling adventure,
            or simply need a temporary solution, RentMeNow has got you covered.
          </p>
          <div className="w-full px-5 lg:px-10 grid grid-cols-2 gap-x-5 gapy-3">
            <p className="text-neutral-200 text-left">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Price Per Day:{" "}
              </span>{" "}
              Rs 9232
            </p>
            <p className="text-neutral-200 text-right">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Price Per Hour:{" "}
              </span>{" "}
              Rs 232
            </p>
            <p className="text-neutral-200 text-left">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Contact No:{" "}
              </span>{" "}
              9801215212
            </p>
            <p className="text-neutral-200 text-right">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Address:{" "}
              </span>{" "}
              Parsyang-5, Pokhara
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#333] w-full pt-10 pb-20">
        <div className="text-left w-[75%] text-neutral-200 my-5 ">
          <h1 className="text-[1.2rem] ">Renting Details</h1>
          <p className="text-neutral-300">
            Provide your renting details to rent now.
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-[75%] py-5 border-y-[1px] border-neutral-500"
        >
          <div className=" mb-3 grid-cols-1 lg:grid-cols-2 justify-start items-start gap-8 grid">
            {" "}
            <div className="w-[100%] grid  grid-cols-1 justify-start items-start gap-8">
              <div className="w-[100%]   flex justify-center text-white  z-[6] items-center">
                <h1 className="w-full lg:w-[40%]">Pick Up Location: </h1>
                <div className="w-full">
                  <Listbox
                    value={selected_pick_up_location}
                    onChange={set_selected_pick_up_location}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full  text-black cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {selected_pick_up_location.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <AiFillCaretDown className="h-5 w-5 " />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {location.map((l, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={l}
                            >
                              {l.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="w-[100%]   flex justify-center text-white  z-[5] items-center">
                <h1 className="w-full lg:w-[40%]">Duration: </h1>
                <div className="w-full">
                  <Listbox value={duration} onChange={setDuration}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full  text-black cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{duration.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <AiFillCaretDown
                            className="h-5 w-5 "
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {duration_list.map((d, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={d}
                            >
                              {d.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="w-[100%]   flex justify-center text-white  z-[4] items-center">
                <h1 className="w-full lg:w-[40%]">Quantity: </h1>
                <div className="w-full">
                  <Listbox value={quantity} onChange={setQuantity}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full  text-black cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{quantity.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <AiFillCaretDown
                            className="h-5 w-5 "
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {quantity_list.map((d, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={d}
                            >
                              {d.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>
            <div className="w-[100%]    flex justify-between text-white   items-center">
              <h1 className="w-full lg:w-[30%]">Pick Up Date: </h1>
              <div className="w-full overflow-hidden">
                {" "}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DesktopDateTimePicker"]}>
                    <DemoItem>
                      <DateTimePicker
                        className="  shadow-lg "
                        sx={{
                          backgroundColor: "white",

                          boxShadow: "lg",
                          width: "100%",
                          borderRadius: 1,

                          overflow: "hidden",
                        }}
                        defaultValue={today}
                        value={today}
                        onChange={(e) => {
                          set_selected_pick_up_date(e);
                        }}
                        maxDate={max_day}
                        minTime={dayjs().set("hour", 2).startOf("hour")}
                        required
                        disablePast
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <button
              type="submit"
              className={`w-[100%] mt-5 md:w-[30%]   py-2  text-neutral-200 rounded-lg shadow-xl ${
                JSON.stringify(selected_pick_up_location) ===
                  JSON.stringify(location[0]) ||
                JSON.stringify(duration) === JSON.stringify(duration_list[0]) ||
                JSON.stringify(quantity) === JSON.stringify(quantity_list[0]) ||
                JSON.stringify(selected_pick_up_date) === JSON.stringify(today)
                  ? "border-[1px]"
                  : "btn bg-blue-600 border-[1px]"
              }`}
              disabled={
                JSON.stringify(selected_pick_up_location) ===
                  JSON.stringify(location[0]) ||
                JSON.stringify(duration) === JSON.stringify(duration_list[0]) ||
                JSON.stringify(quantity) === JSON.stringify(quantity_list[0]) ||
                JSON.stringify(selected_pick_up_date) === JSON.stringify(today)
              }
            >
              Rent Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentDetails;
