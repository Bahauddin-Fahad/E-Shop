import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
const ShippingHeader = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      <p className="text-xl font-semibold">Shipping and Payment</p>
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center rounded-full border-[1px] border-primary h-8 w-8">
          <IoCartOutline className="w-5 h-5" />
        </div>
        <div class="h-[2px] w-20 bg-gray-200 rounded-full"></div>
        <div className="bg-primary text-white flex justify-center items-center rounded-full h-8 w-8">
          <MdOutlineLocalShipping className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ShippingHeader;
