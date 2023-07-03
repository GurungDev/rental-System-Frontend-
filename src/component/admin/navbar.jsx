import React from "react";
import Drawer from "react-modern-drawer";
import "./css/navbar.css";
import "react-modern-drawer/dist/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiDashboard2Line, RiLogoutCircleLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { FaClipboardList, FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/slices/userSlice";

const Navbar = () => {
  const links = [
    { path: "/admin", name: "DashBoard", logo: <RiDashboard2Line /> },
    { path: "/users", name: "Users", logo: <BsFillPersonFill /> },
    { path: "/listing", name: "Add a Listing", logo: <FaClipboardList /> },
    { path: "/payments", name: "Payments", logo: <FaClipboardList /> },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="nav my-auto mx-auto fixed left-0 z-[10] w-full lg:w-0  ">
      {" "}
      <div className="lg:hidden m-5  ">
        {" "}
        <button
          onClick={toggleDrawer}
          className="hover:rotate-180 duration-300"
        >
          <FaBars className="text-[1.5rem] " />
        </button>
        <Drawer open={isOpen} direction="left" className="w-[]">
          <div className="  h-[100vh] bg-[#333] shadow ">
            <div className="w-[90%] m-auto text-neutral-200 py-8     text-center">
              <h1 className="text-[1.5rem]  border-b-[2px] rounded border-blue-600   ">
                Pokhara Rentals
              </h1>

              <div className="grid gap-3 w-full mt-10">
                {links.map((e, index) => {
                  return (
                    <Link
                      onClick={() => {
                        toggleDrawer();
                      }}
                      className={`${
                        pathname === e.path
                          ? "bg-neutral-700"
                          : "bg-neutral-600"
                      }  px-5 w-full text-left rounded-md py-[.6em] shadow-md hover:bg-neutral-700 duration-300 flex items-center gap-2`}
                      key={index}
                      to={e.path}
                    >
                      <div className="w-[10%] text-[1.5rem] ">{e.logo}</div>
                      <div className="w-[85%] text-[.9rem] ">{e.name}</div>
                    </Link>
                  );
                })}
              </div>

              <div className="absolute bottom-8  w-full">
                <button
                  onClick={() => {
                    dispatch(resetLogin());
                    window.location.reload();
                  }}
                  className="hover:border-blue-600 duration-500 hover:text-blue-600 border-[#333] border-b-[2px]  flex w-[45%]  gap-2 items-center justify-center  "
                >
                  <RiLogoutCircleLine className="text-[1.5rem]" />
                  <p>Log Out</p>
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      <div className="hidden nav my-auto mx-auto lg:block h-[100vh] bg-[#333] shadow w-[20vw] min-w-[250px] relative left-0">
        <div className="w-[90%] m-auto text-neutral-200 py-8     text-center">
          <h1 className="text-[1.5rem]  border-b-[2px] rounded border-blue-600  ">
            Pokhara Rentals
          </h1>

          <div className="grid gap-3 w-full mt-10">
            {links.map((e, index) => {
              return (
                <Link
                  className={`${
                    pathname === e.path ? "bg-neutral-700" : "bg-neutral-600"
                  }  px-5 w-full text-left rounded-md py-[.6em] shadow-md hover:bg-neutral-700 duration-300 flex items-center gap-2`}
                  key={index}
                  to={e.path}
                >
                  <div className="w-[10%] text-[1.5rem] ">{e.logo}</div>
                  <div className="w-[85%] text-[.9rem] ">{e.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="absolute bottom-8  w-full">
            <button
              onClick={() => {
                dispatch(resetLogin());
                window.location.reload();
              }}
              className="hover:border-blue-600 duration-500 hover:text-blue-600 border-[#333] border-b-[2px]  flex w-[35%]  gap-2 items-center justify-center  "
            >
              <RiLogoutCircleLine className="text-[1.5rem]" />
              <p>Log Out</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
