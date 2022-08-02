import React from "react";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { IoCartOutline, IoMapOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100 px-10">
        <div class="navbar-start ">
          <p className="normal-case text-xl pl-3 flex items-center gap-1">
            <IoMapOutline /> <span className="text-orange-400">E-</span>Shop
          </p>
        </div>
        <div class="navbar-center">
          <Link to="" class="btn btn-ghost normal-case text-lg">
            Men
          </Link>
          <Link to="" class="btn btn-ghost normal-case text-lg">
            Women
          </Link>
          <Link to="" class="btn btn-ghost normal-case text-lg">
            Kids
          </Link>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <GrSearch className="w-5 h-5" />
          </button>
          <button class="btn btn-ghost btn-circle">
            <IoCartOutline className="w-6 h-6" />
          </button>
          <button class="btn btn-ghost btn-circle">
            <FaRegUser className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default Navbar;
