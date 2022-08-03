import React from "react";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { IoCartOutline, IoMapOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="navbar px-6 mt-3">
        <div className="navbar-start ">
          <div className="flex items-center gap-3">
            <IoMapOutline className="w-8 h-8" />
            <p className="normal-case text-xl">
              <span className="text-orange-400">E-</span>Shop
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <Link to="" className="btn btn-ghost font-normal normal-case text-lg">
            Men
          </Link>
          <Link to="" className="btn btn-ghost font-normal normal-case text-lg">
            Women
          </Link>
          <Link to="" className="btn btn-ghost font-normal normal-case text-lg">
            Kids
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <GrSearch className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <IoCartOutline className="w-6 h-6" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaRegUser className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
