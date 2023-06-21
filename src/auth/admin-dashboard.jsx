import React from "react";
import { DataGridDemo, Navbar } from "../component/component";

const Dashboard = () => {
  return (
    <div className="md:absolute py-20 lg:right-0 lg:py-10 w-[95%] m-auto lg:w-[80%] ">
      <div className="w-[88%] md:w-[80%] grid gap-4">
        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="h-[200px] aspect-video bg-red-200"></div>
          <div className="h-[200px]  aspect-video bg-red-300"></div>
          <div className="h-[200px]  aspect-video bg-red-200"></div>
        </div>
        <div className="w-full h-[50vh] bg-green-200">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
