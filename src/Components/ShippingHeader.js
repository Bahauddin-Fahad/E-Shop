import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
const ShippingHeader = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-8">
      <p className="text-xl font-medium">Shipping and Payment</p>
      <div className="flex items-center gap-3 mt-5 md:m-0 lg:m-0">
        <div className="flex justify-center items-center rounded-full border-2 border-primary h-9 w-9">
          <IoCartOutline className="w-6 h-6" />
        </div>
        <div className="h-[2px] w-[70px] bg-gray-200 rounded-full"></div>
        <div className="bg-primary text-white flex justify-center items-center rounded-full h-9 w-9">
          <MdOutlineLocalShipping className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ShippingHeader;
