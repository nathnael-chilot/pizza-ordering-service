import Avatar from "@mui/material/Avatar";
import React from "react";

const RelatedCard = () => {
  return (
    <div className="w-[387px] h-[450px] top-[646.5px] left-[66px] gap-[15px] p-[30px] rounded-[25px] opacity-100 bg-white">
      <div className="w-[327px] h-[450px] gap-[10px] opacity-100 ml-[30px]">
        <div className="w-[318px] h-[318px] flex items-center rounded-full bg-[#EA810033] pb-9 gap-0 opacity-100">
          <Avatar
            alt="restaurant"
            src="/assets/heropizza.png"
            sx={{
              width: "272.83px",
              height: "276.95px",
              top: "21px",
              left: "23px",
              gap: "0px",
              opacity: 100,
              transform: "rotate(0deg)",
              boxShadow: "5px 12px 20px 0px #00000040",
            }}
          />
        </div>
        <div className="w-[327px] h-[132px] gap-[10px] opacity-100">
          <div className="w-[307px] h-[62px] gap-[10px] opacity-100 flex flex-col items-center justify-center">
            <p className="w-[131px] h-[24px] gap-0 opacity-100 font-roboto text-[25px] leading-[23.67px] tracking-[0.03em] font-bold text-[#000000]">
              Margherita
            </p>
            <div className="w-[307px] h-[28px] gap-0 opacity-100 mt-[10px] font-roboto text-[15px] leading-[14.2px] tracking-[0.03em] font-normal text-[#000000]">
              <p>Tomato, Mozzarella, Bell Peppers, Onions, Olives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
