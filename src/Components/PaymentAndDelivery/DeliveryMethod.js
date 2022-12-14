import React from "react";
import inpostLogo from "../../Images/logos/delivaryMethods/inpost.png";
import dpdLogo from "../../Images/logos/delivaryMethods/dpd.png";
import dhlLogo from "../../Images/logos/delivaryMethods/dhl.png";
import fedExLogo from "../../Images/logos/delivaryMethods/fedEx.png";
const DeliveryMethod = () => {
  return (
    <div className="font-medium w-full max-w-md mx-auto">
      <h2 className="text-start mb-6">Delivery Method</h2>
      <div className="grid grid-cols-2 gap-2">
        <button className="border-2 border-gray-200 rounded-[23px] flex justify-evenly items-center h-14">
          <img src={inpostLogo} alt="" className="w-12" />
          <p>$20.00</p>
        </button>
        <button className="border-2 border-gray-200 rounded-[23px] flex justify-evenly items-center h-14">
          <img src={dpdLogo} alt="" className="w-10" />
          <p>$12.00</p>
        </button>
        <button className="border-2 border-gray-200 rounded-[23px] flex justify-evenly items-center h-14">
          <img src={dhlLogo} alt="" className="w-12" />
          <p>$15.00</p>
        </button>
        <button className="border-2 border-gray-200 rounded-[23px] flex justify-evenly items-center h-14">
          <img src={fedExLogo} alt="" className="w-12" />
          <p>$10.00</p>
        </button>
      </div>
    </div>
  );
};

export default DeliveryMethod;
