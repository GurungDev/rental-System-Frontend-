import React from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import { RiDashboard2Line, RiLogoutCircleLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { FaClipboardList, FaBars } from "react-icons/fa";
const Navbar = () => {
  const links = [
    { path: "/admin", name: "DashBoard", logo: <RiDashboard2Line /> },
    { path: "/customer", name: "Customers", logo: <BsFillPersonFill /> },
    { path: "/listing", name: "Add a Listing", logo: <FaClipboardList /> },
    { path: "/payments", name: "Payments", logo: <FaClipboardList /> },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className=" fixed left-0 z-[10] w-full lg:w-0  ">
      {" "}
      <div className="lg:hidden m-5 ">
        {" "}
        <button
          onClick={toggleDrawer}
          className="hover:rotate-180 duration-300"
        >
          <FaBars className="text-[1.5rem] " />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="w-[]"
        >
          <div className="  h-[100vh] bg-[#333] shadow ">
            <div className="w-[90%] text-neutral-200 py-8 h-full flex flex-col justify-between text-center">
              <h1 className="text-[1.8rem] border-b-[2px] rounded border-blue-600  ">
                Pokhara Rentals
              </h1>
              <div className="">
                {" "}
                <div className="rounded-[100%] shadow-xl bg-blue-600 aspect-square flex justify-center items-center">
                  <p>image</p>
                </div>
                <p className="mt-4">Nishan Gurung</p>
                <small>Admin</small>
              </div>

              <div className="grid gap-5 w-full">
                {links.map((e, index) => {
                  return (
                    <Link
                      className={`${
                        pathname === e.path
                          ? "bg-neutral-700"
                          : "bg-neutral-600"
                      }  px-7 w-full text-left rounded-md py-[.5em] shadow-md hover:bg-neutral-700 duration-300 flex items-center gap-2`}
                      key={index}
                      to={e.path}
                      onClick={toggleDrawer}
                    >
                      <div className="w-[10%] text-[1.5rem]">{e.logo}</div>
                      <div className="w-[85%]">{e.name}</div>
                    </Link>
                  );
                })}
              </div>

              <button className="hover:border-blue-600 duration-500 hover:text-blue-600 border-[#333] border-b-[2px]  flex w-[45%] items-center justify-center  ">
                <RiLogoutCircleLine className="text-[1.5rem]" />
                <p>Log Out</p>
              </button>
            </div>
          </div>
        </Drawer>
      </div>
      <div className="hidden lg:block h-[100vh] bg-[#333] shadow min-w-[300px] w-[25%] relative left-0">
        <div className="w-[90%] text-neutral-200 py-8 h-full flex flex-col justify-between text-center">
          <h1 className="text-[1.8rem] border-b-[2px] rounded border-blue-600  ">
            Pokhara Rentals
          </h1>
          <div className="">
            {" "}
            <div className="rounded-[100%] shadow-xl bg-blue-600 aspect-square flex justify-center items-center">
              <p>image</p>
            </div>
            <p className="mt-4">Nishan Gurung</p>
            <small>Admin</small>
          </div>

          <div className="grid gap-5 w-full">
            {links.map((e, index) => {
              return (
                <Link
                  className={`${
                    pathname === e.path ? "bg-neutral-700" : "bg-neutral-600"
                  }  px-7 w-full text-left rounded-md py-[.5em] shadow-md hover:bg-neutral-700 duration-300 flex items-center gap-2`}
                  key={index}
                  to={e.path}
                >
                  <div className="w-[10%] text-[1.5rem]">{e.logo}</div>
                  <div className="w-[85%]">{e.name}</div>
                </Link>
              );
            })}
          </div>

          <button className="hover:border-blue-600 duration-500 hover:text-blue-600 border-[#333] border-b-[2px]  flex w-[35%] items-center justify-center  ">
            <RiLogoutCircleLine className="text-[1.5rem]" />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
