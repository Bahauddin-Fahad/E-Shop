import React from "react";
import summerVibes from "../../Images/models/summerVibes.jpg";
import slimfit from "../../Images/models/slimFit.jpg";
import { MdOutlineLocalShipping } from "react-icons/md";
const Cart = () => {
  return (
    <div className="col-span-3 ">
      <h2 className="text-start font-medium mb-6">Your Cart</h2>
      <div className="space-y-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={summerVibes} alt="" />
              </div>
            </div>
            <div className="text-start space-y-2">
              <p className="w-[110px] font-medium">T-Shirt Summer Vibes</p>
              <p className="text-sm text-gray-400">#261311</p>
            </div>
          </div>
          <p className="font-medium">$89.99</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={slimfit} alt="" />
              </div>
            </div>
            <div className="text-start space-y-2">
              <p className="w-[90px] font-medium">Basic Slim Fit T-Shirt</p>
              <p className="text-sm text-gray-400">#212315</p>
            </div>
          </div>
          <p className="font-medium">$69.99</p>
        </div>
        <div className="flex justify-around items-center bg-gray-100 rounded-full h-12">
          <p>Total cost</p>
          <p className="font-semibold">$159.98</p>
        </div>
        <div className="flex items-center justify-center pt-3">
          <MdOutlineLocalShipping className="w-5 h-5" />
          <p className="w-44">
            You are <span className="font-semibold">$30,02</span> away from free
            shipping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
