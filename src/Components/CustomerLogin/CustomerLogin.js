import React from "react";
import { useNavigate } from "react-router-dom";
const CustomerLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row gap-3 font-medium mb-10">
      <button
        onClick={() => navigate("/login")}
        className="bg-primary text-white text-sm w-[120px] h-12 rounded-full uppercase"
      >
        Log in
      </button>
      <button
        onClick={() => navigate("/signup")}
        className="text-sm w-[120px] h-12 rounded-full uppercase border-2 border-gray-200"
      >
        Sign up
      </button>
    </div>
  );
};

export default CustomerLogin;
