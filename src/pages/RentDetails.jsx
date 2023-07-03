import React, { Fragment, useEffect, useState } from "react";
import { Header, Lrp } from "../component/component";
import dayjs from "dayjs";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AiFillCaretDown } from "react-icons/ai";
import "./css/rentdetails.css";
import { getListingDetails } from "../service/listing/getListingDetails";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import postAddRental from "../service/rental/postAddRental";

const RentDetails = () => {
  const params = useParams();
  const data = params?.id;
  const [details, setDetails] = useState({});
  const today = dayjs(new Date()).set("hour", 9).startOf("hour");
  const max_day = dayjs().add(10, "day");
  const pathName = details?.image;
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const location = [
    { name: "Select A Location" },
    { name: "Parsyang" },
    { name: "Lakeside" },
  ];
  const duration_list = [
    { name: "Select the duration for rent", value: 0 },
    { name: "1 Hour", value: 1 },
    { name: "3 Hour", value: 3 },
    { name: "5 Hour", value: 5 },
    { name: "10 Hour", value: 10 },
  ];
  const quantity_list = [
    { name: "Select the quantity", value: 0 },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
  ];
  const [selected_pick_up_location, set_selected_pick_up_location] = useState(
    location[0]
  );
  const [selected_pick_up_date, set_selected_pick_up_date] = useState(today);
  let [isOpen, setIsOpen] = useState(false);
  const [duration, setDuration] = useState(duration_list[0]);
  const [quantity, setQuantity] = useState(quantity_list[0]);
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    async function sendData() {
      try {
        const res = await postAddRental({
          selected_pick_up_date,
          selected_pick_up_location: selected_pick_up_location.name,
          duration: duration.name,
          quantity: quantity.name,
          listingId: data,
          payment: amount,
        });
        if (!res) {
          throw new Error("Couldn't Rent Now. Try Again!");
        }
        toast.success("Successfully rented");
      } catch (error) {
        toast.error("Couldn't Rent Now. Try Again!");
      }
    }
    sendData();
  };

  const getDetails = () => {
    async function results() {
      try {
        const res = await getListingDetails({ id: data });
        if (!res) {
          throw new Error("");
        }
        setDetails(res);
      } catch (error) {
        toast.error("Could not get listing details");
      }
    }
    results();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getDetails();
  }, []);

  return (
    <div className="relative ">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div
        className=" image w-full pt-[27vh] pb-20 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),url(${pathName})`,
        }}
      >
        <div className="w-[95%] m-auto lg:w-[75%] flex items-center justify-center flex-col gap-5">
          <h1 className="text-[2rem] text-neutral-200 leading-20">
            {details?.name}
          </h1>

          <p className="text-neutral-200 border-b-[3px] w-full pb-5 px-5 text-center leading-7">
            {details?.details}
          </p>
          <div className="w-full px-5 lg:px-10 grid grid-cols-2 gap-x-5 gapy-3">
            <p className="text-neutral-200 text-left">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Price Per Day:{" "}
              </span>{" "}
              Rs {details?.price_per_day}
            </p>
            <p className="text-neutral-200 text-right">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Price Per Hour:{" "}
              </span>{" "}
              Rs {details?.price_per_hour}
            </p>
            <p className="text-neutral-200 text-left">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Contact No:{" "}
              </span>{" "}
              {details?.contact}
            </p>
            <p className="text-neutral-200 text-right">
              <span className="text-[1.1rem] font-medium text-blue-600">
                Address:{" "}
              </span>{" "}
              {details?.address}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#333] w-full pt-10 pb-20">
        <div className="text-left w-[75%] m-auto text-neutral-200 my-5 ">
          <h1 className="text-[1.2rem] ">Renting Details</h1>
          <p className="text-neutral-300">
            Provide your renting details to rent now.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-[75%] m-auto py-5 border-y-[1px] border-neutral-500"
        >
          <div className=" mb-3 grid-cols-1 lg:grid-cols-2 justify-start items-start gap-8 grid">
            {" "}
            <div className="w-[100%] grid  grid-cols-1 justify-start items-start gap-8">
              <div className="w-[100%]   flex justify-center text-white  z-[6] items-center">
                <h1 className="w-full lg:w-[40%] m-auto">Pick Up Location: </h1>
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
                <h1 className="w-full lg:w-[40%] m-auto">Duration: </h1>
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
                <h1 className="w-full lg:w-[40%] m-auto">Quantity: </h1>
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
              onClick={() => {
                setAmount(
                  quantity.value * duration.value * details?.price_per_hour
                );
                openModal();
              }}
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
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Payment Method
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Total Amount: Rs {amount}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <button
                              type="button"
                              className="inline-flex  w-[150px] justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={() => {
                                handleSubmit();
                                closeModal();
                              }}
                            >
                              Cash On Delivery
                            </button>
                          </div>
                          <div>
                            {" "}
                            <button
                              type="button"
                              className="inline-flex w-[150px] justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Esewa
                            </button>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentDetails;
