import React from "react";

const Admin_Card = (props) => {
  const img = "/image/homepage.jpg";
  return (
    <div className="relative w-full h-[35vh] overflow-hidden rounded-md">
      <div
        className="card relative w-full h-full hover:scale-110 duration-300"
        style={{
          backgroundImage: ` linear-gradient(rgba(  0,0,0, 0.5), rgba( 0,0,0, 0.3)), url(${img})`,
          backgroundRepeat: " no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="title w-[90%] text-[1.2rem] text-center pt-40 text-[1.5rem] text-white">
          <h1>Product Title</h1>
        </div>
        <div className="details absolute bottom-[-110%] duration-300 ease left-0 leading-2   bg-black bg-opacity-70 w-full text-neutral-300">
          <div className="w-[90%] py-6 px-3 text-[.8rem]">
            <h1>More Info</h1>
            <p>
              lasygaogdagda awdhaujdbsaiudga augdajkbdasg duagdiahsdnagda
              uagdaiugsdaus gdaud gauisgdasuidg aiudgaiudga idgsab
              daigdahodhaidobcnoi a0dwdacghadyawh d
            </p>
            <div className="grid grid-cols-2 gap-10">
              {" "}
              <button class="px-6 py-1 bg-blue-600 rounded  ease-in-out duration-[.5s] hover:bg-red-600  shadow mt-2">
                Delete
              </button>
              <button class="px-6 py-1 bg-blue-600 rounded  ease-in-out duration-[.5s] hover:bg-red-600  shadow mt-2">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Card;
