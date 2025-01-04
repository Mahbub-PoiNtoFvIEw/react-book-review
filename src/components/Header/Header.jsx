import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut();
  }

  console.log('c_u',user);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center px-2 mt-2 relative">
        <div className="flex gap-1 items-center">
          {/* toggle menu logo */}
          <div onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <AiOutlineClose className="text-xl md:hidden text-stone-500 cursor-pointer"></AiOutlineClose>
            ) : (
              <AiOutlineMenuUnfold className="text-xl md:hidden text-stone-500 cursor-pointer"></AiOutlineMenuUnfold>
            )}
          </div>
          {/* header icon */}
          <NavLink to={`/`}>
            <h1 className="md:text-2xl text-xl font-bold">Am<span className="text-[#23BE0A]">@</span>r bOok</h1>
          </NavLink>
        </div>
        {/* nav links start */}
        <div
          className={`flex md:gap-4 gap-2 md:flex-row flex-col md:bg-white bg-slate-50 rounded-lg absolute md:static cursor-pointer duration-1000 left-1
                        ${!openMenu ? `-top-40` : `top-8 py-2`}
                        `}
        >
          <NavLink className={({ isActive }) => isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : "" } to={`/`}>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : ""}to={`/booksList`}>
            Listed Books
          </NavLink>
          <NavLink className={({ isActive }) => isActive
                ? "border-2 border-[#23BE0A] py-1 px-3 rounded-lg text-[#23BE0A] font-bold"
                : ""} to={`/readingPage`}>
            Pages to Read
          </NavLink>
        </div>
        {/* nav link end */}
        <div className="space-x-1">
          {
            user ? <div className="flex items-center gap-1">
             <p>{user?.displayName} {user.displayName&&'||'} {user?.email}</p>
             <button onClick={handleSignOut} className="py-1 md:py-2 font-bold md:px-6 px-2 rounded-lg text-white bg-[#23BE0A]">
              Sign Out
             </button>
            </div>
            :
            <>
              <Link to={`/signup`}>
                <button className="py-1 md:py-2 font-bold md:px-6 px-2 rounded-lg text-white bg-[#23BE0A]">
                  Sign Up
                </button>
              </Link>
              <Link to={`/signin`}>
                <button className="py-1 md:py-2 font-bold md:px-6 px-2 rounded-lg text-white bg-[#59C6D2]">
                  Sign In
                </button>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
