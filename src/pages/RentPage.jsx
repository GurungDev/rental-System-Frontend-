import React, { useEffect } from "react";
import { Card, Header, Lrp } from "../component/component";
import { useParams } from "react-router";

const RentPage = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div className="bg-[#333] w-full lg:pt-[15vh] pt-[20vh]">
        <h1 className="w-[80%] text-white m-auto mb-6 text-center text-[2rem]">
          {params?.name}
        </h1>
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default RentPage;
