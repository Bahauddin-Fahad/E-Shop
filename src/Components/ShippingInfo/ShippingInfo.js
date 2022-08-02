import React from "react";
import CustomerLogin from "./CustomerLogin";

const ShippingInfo = () => {
  return (
    <div className="col-span-5 ">
      <CustomerLogin />
      <h2 className="text-start mt-10 mb-5">Shipping Information</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <input
          type="text"
          placeholder="Email"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Address"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="First Name"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="City"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Postal Code / ZIP"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Phone Number"
          class="input input-bordered rounded-full w-full max-w-xs"
        />
        <select class="select input-bordered rounded-full w-full max-w-xs">
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
