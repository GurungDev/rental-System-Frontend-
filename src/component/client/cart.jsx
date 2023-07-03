import React from "react";

const Cart = (props) => {
  const newDate = new Date(props.date);
  const formattedDate = newDate.toISOString().split("T")[0];
  return (
    <div className="bg-white text-[.9rem]  lg:h-[150px]  flex flex-col lg:flex-row pb-5 lg:pb-0 lg:gap-3 items-center justify-between rounded-md shadow-md ">
      <div className="w-full h-[150px] bg-red-200 lg:w-[30%] lg:h-[full] rounded-t-md lg:rounded-none lg:rounded-l-md overflow-hidden flex justify-center items-center">
        <img
          src={props.image}
          className=" object-contain  lg:h-auto w-[100%]"
          alt=""
        />
      </div>
      <h1 className="text-[1rem] font-[800]  text-neutral-700 my-2 lg:hidden">
        {props.name}
      </h1>
      <div className="flex md:flex-col lg:flex-row justify-between  w-[90%] m-auto">
        <div className="text-left w-[90%] text-neutral-500">
          {" "}
          <h1 className="text-[1rem] font-[800] hidden lg:block text-neutral-700  ">
            {props.name}
          </h1>
          <p>
            Quantity:{" "}
            <span className="text-neutral-600"> {props.quantity}</span>
          </p>
          <p>
            Duration:{" "}
            <span className="text-neutral-600"> {props.duration} </span>
          </p>
          <p>
            Payment:{" "}
            <span className="text-neutral-600">Rs {props.payment}</span>
          </p>
        </div>
        <div className="text-left  w-[90%] text-neutral-500 lg:mt-6">
          {" "}
          <p>
            Pickup location:{" "}
            <span className="text-neutral-600"> {props.location}</span>
          </p>
          <p>
            Date: <span className="text-neutral-600"> {formattedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
