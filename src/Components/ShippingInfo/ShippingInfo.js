import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomerLogin from "../CustomerLogin/CustomerLogin";

const ShippingInfo = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="col-span-5 ">
      {!user && <CustomerLogin />}
      <h2 className="text-start font-medium  mb-5">Shipping Information</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <input
          type="text"
          placeholder="Email"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Address"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="First Name"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="City"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Postal Code / ZIP"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="input border-2 border-gray-200 rounded-full w-full max-w-xs"
        />
        <select className="select border-2 border-gray-200 rounded-full w-full max-w-xs">
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
