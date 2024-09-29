import React from "react";

const PopUp = () => {
  return (
    <div className="w-[857px] h-[591px] top-[99px] left-[127px] gap-[20px] rounded-[20px] opacity-100 bg-white">
      <div className="relative w-[602px] h-[393px] top-[99px] left-[127px] gap-[20px] opacity-100">
        <div className="relative w-[281.3px] h-[281.3px] opacity-100">
          <div className="w-[281.3px] h-[281.3px] rounded-full bg-[#05C6051A] opacity-100"></div>
        </div>
        <span className="relative w-[602px] h-[92px] font-inter font-bold text-[32px] tracking-[46.3px] text-center text-[#05C605] opacity-100">
          Your order has been successfully completed!
        </span>
      </div>
    </div>
  );
};

export default PopUp;
