import React from "react";
import { Navigate, useNavigate } from "react-router";

const Card = (props) => {
  const img = props.image;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[45vh] overflow-hidden rounded-md">
      <div
        className="card relative w-full h-full hover:scale-105 duration-300"
        style={{
          backgroundImage: ` linear-gradient(rgba(  0,0,0, 0.5), rgba( 0,0,0, 0.3)), url(${img})`,
          backgroundRepeat: " no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="title w-[90%] m-auto text-center pt-40 text-[1.5rem] text-white">
          <h1>{props.name}</h1>
        </div>
        <div className="details absolute bottom-[-100%] duration-300 ease left-0  bg-black bg-opacity-70 w-full text-neutral-300">
          <div className="w-[90%] m-auto py-6 px-3">
            <h1 className="text-neutral-100">More Info</h1>
            <p className="leading-[1.5rem] tracking-loose font-light text-neutral-200 ">
              {props.details}
            </p>
            <button
              onClick={() => navigate(`/rentForm/${props._id}`)}
              class="px-6 py-1 bg-blue-600 rounded  ease-in-out duration-[.5s] hover:bg-red-600  shadow mt-2"
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
