import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center px-2 mt-2 relative">
        <div className="flex gap-1 items-center">
          <div onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <AiOutlineClose className="text-2xl md:hidden text-stone-500"></AiOutlineClose>
            ) : (
              <AiOutlineMenuUnfold className="text-2xl md:hidden text-stone-500"></AiOutlineMenuUnfold>
            )}
          </div>
          <h1 className="md:text-4xl text-xl font-bold">Book Vibe</h1>
        </div>
        <div
          className={`flex md:gap-4 gap-2 md:flex-row flex-col md:bg-white bg-slate-50 rounded-lg absolute md:static cursor-pointer duration-1000
                        ${!openMenu ? `-top-40` : `top-14 py-2`}
                        `}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : ""
            }
            to={`/`}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : ""
            }
            to={`/booksList`}
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : ""
            }
            to={`/readingPage`}
          >
            Pages to Read
          </NavLink>
        </div>
        <div className="space-x-1">
          <button className="py-1 md:py-2 font-bold md:px-6 px-2 rounded-lg text-white bg-[#23BE0A]">
            Sign Up
          </button>
          <button className="py-1 md:py-2 font-bold md:px-6 px-2 rounded-lg text-white bg-[#59C6D2]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
