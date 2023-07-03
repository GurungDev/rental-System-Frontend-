import React from "react";
import { HiHome } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsWater } from "react-icons/bs";
import { FcLandscape } from "react-icons/fc";

const Header = () => {
  const { pathname } = useLocation();

  const rent = [
    {
      href: "/rent/2",
      label: "On Water",
      icon: <BsWater className="text-blue-900" />,
    },
    { href: "/rent/1", label: "On Land", icon: <FcLandscape /> },
  ];
  return (
    <div className="grid grid-cols-3 items-center text-[1.1rem] bg-white w-[80%] m-auto py-1 shadow rounded-xl   ">
      {" "}
      <div
        className={
          pathname.includes("/rent/") ? "home-icon active" : "home-icon"
        }
      >
        <Menu>
          <Menu.Button className="flex items-center gap-3 relative ">
            Rent
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="shadow mt-5 flex w-[200px] flex-col gap-2 rounded absolute bg-white p-1 ">
              {rent.map((e, index) => {
                return (
                  <Menu.Item
                    key={index}
                    as="a"
                    href={e.href}
                    className=" hover:bg-blue-600 hover:text-white w-[95%] m-auto rounded px-10 py-2 transition duration-300  border "
                  >
                    <div className="text-center w-full flex items-center justify-between gap-2 w-full">
                      {e.icon}
                      {e.label}
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div
        className={`rounded-[100%] m-auto active bg-black text-white p-3 hover:scale-110 hover:shadow-2xl duration-300 ease-in-out shadow  `}
      >
        <Link to="/">
          {" "}
          <HiHome className={`icon  duration-300 ease-in-out m-auto`} />
        </Link>
      </div>
      <div
        className={
          pathname.includes("/aboutUs") ? "home-icon active" : "home-icon"
        }
      >
        {" "}
        <Link to="/aboutUs">About Us</Link>
      </div>
    </div>
  );
};

export default Header;
