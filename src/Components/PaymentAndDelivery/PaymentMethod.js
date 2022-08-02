import React from "react";
import payPalLogo from "../../Images/paymentMethods/payPal.png";
import visaLogo from "../../Images/paymentMethods/visa.png";
import masterCardLogo from "../../Images/paymentMethods/masterCard.png";
import maestroLogo from "../../Images/paymentMethods/maestro.png";
import discoverLogo from "../../Images/paymentMethods/discover.png";
import idealLogo from "../../Images/paymentMethods/ideal.png";
const PaymentMethod = () => {
  return (
    <div>
      <h2 className="text-start mb-6">Payment Method</h2>
      <div className="grid grid-cols-3 gap-2">
        <button className="border-2 border-gray-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={payPalLogo} alt="" className="w-16" />
        </button>
        <button className="border-2 border-gray-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={visaLogo} alt="" className="w-12" />
        </button>
        <button className="border-2 border-gray-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={masterCardLogo} alt="" className="w-16" />
        </button>
        <button className="border-2 border-orange-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={maestroLogo} alt="" className="w-9" />
        </button>
        <button className="border-2 border-gray-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={discoverLogo} alt="" className="w-16" />
        </button>
        <button className="border-2 border-gray-100 rounded-[22px] flex justify-center items-center h-12">
          <img src={idealLogo} alt="" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
