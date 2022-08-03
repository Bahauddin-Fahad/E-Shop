import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomerLogin from "../CustomerLogin/CustomerLogin";

const ShippingInfo = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="col-span-full lg:col-span-5 w-full max-w-md lg:max-w-lg mx-auto lg:mx-0">
      {!user && <CustomerLogin />}
      <h2 className="text-start font-medium  mb-5">Shipping Information</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5 ">
        <input
          type="text"
          placeholder="Email"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="text"
          placeholder="Address"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="text"
          placeholder="First Name"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="text"
          placeholder="City"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="text"
          placeholder="Postal Code / ZIP"
          className="input border-2 border-gray-200 rounded-full"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="input border-2 border-gray-200 rounded-full"
        />
        <select className="select text-gray-400 font-normal text-sm border-2 border-gray-200 rounded-full">
          <option defaultValue="">Poland</option>
          <option>USA</option>
          <option>Germany</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
      </div>
    </div>
  );
};

export default ShippingInfo;
