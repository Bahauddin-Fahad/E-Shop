import React from "react";

const CustomerLogin = () => {
  return (
    <div className="flex gap-3">
      <button className="bg-primary text-white text-xs w-28 h-12 rounded-full uppercase">
        Log in
      </button>
      <button className="text-xs w-28 h-12 rounded-full uppercase input input-bordered">
        Sign up
      </button>
    </div>
  );
};

export default CustomerLogin;
