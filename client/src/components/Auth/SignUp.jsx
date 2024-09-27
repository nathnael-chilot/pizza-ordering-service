import React from "react";
import SlotsSignUp from "./SlotSignUp";

const SignUp = () => {
  return (
    <div className="flex items-center">
      <div className="w-[720px] h-[624px] gap-0 opacity-100 bg-[#FF9921]">
        <img
          src="/assets/logo_pizza.png"
          alt="Logo"
          className="relative h-[285px] w-[285px] top-[162px] left-[208px] gap-0 opacity-100"
        />
      </div>
      <div className="w-[720px] h-[624px] gap-0 opacity-100">
        <SlotsSignUp />
      </div>
    </div>
  );
};

export default SignUp;
