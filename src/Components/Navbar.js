import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { IoCartOutline, IoMapOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="navbar px-6 my-3">
        <div className="navbar-start ">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
          >
            <IoMapOutline className="w-8 h-8" />
            <p className="normal-case text-xl font-medium">
              <span className="text-orange-400">E-</span>Shop
            </p>
          </button>
        </div>
        <div className="lg:flex gap-10 hidden">
          <Link to="" className="btn btn-ghost normal-case text-lg">
            Men
          </Link>
          <Link to="" className="btn btn-ghost normal-case text-lg">
            Women
          </Link>
          <Link to="" className="btn btn-ghost normal-case text-lg">
            Kids
          </Link>
        </div>
        <div className="navbar-end">
          {user && (
            <button
              className="font-semibold text-primary"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          )}
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
      <div className="divider m-0"></div>
    </div>
  );
};

export default Navbar;
