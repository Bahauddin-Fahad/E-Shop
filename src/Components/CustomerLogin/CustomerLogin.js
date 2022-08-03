import React from "react";

const CustomerLogin = () => {
  return (
    <div className="flex gap-3 font-medium">
      <button className="bg-primary text-white text-sm w-[120px] h-12 rounded-full uppercase">
        Log in
      </button>
      <button className="text-sm w-[120px] h-12 rounded-full uppercase border-2 border-gray-200">
        Sign up
      </button>
    </div>
  );
};

export default CustomerLogin;
