import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
const BottomButtons = () => {
  return (
    <div className="flex justify-between font-medium mt-20">
      <div className="flex justify-center ">
        <Link to="" className="flex items-center gap-4">
          <HiArrowLeft />
          Back
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-7">
        <button className="text-xs w-48 h-12 rounded-full uppercase border-2 border-gray-500">
          Continue Shopping
        </button>
        <button className="bg-primary text-white text-xs w-48 h-12 rounded-full uppercase ">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BottomButtons;
