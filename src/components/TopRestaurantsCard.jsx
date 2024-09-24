import React from "react";
import Avatar from "@mui/material/Avatar";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

const TopRestaurantsCard = ({
  RestaurantImage,
  RestaurantName,
  NumberOfOrder,
}) => {
  return (
    <div className="w-[574px] h-[154px] py-[23px] px-[31px] rounded-[15px] gap-[15px] opacity-100 bg-white flex items-center">
      <div className="w-[235px] h-[108px] gap-[10px] opacity-100">
        <div className="w-[191px] h-[50px] gap-[10px] opacity-100 flex items-center">
          <Avatar
            alt="restaurant"
            src={RestaurantImage}
            sx={{ width: 50, height: 50, background: "#D9D9D9" }}
          />
          <div className="w-[131px] h-[19px] font-Roboto text-[20px] font-bold leading-[18.94px] tracking-[0.03em] text-left text-[#000000] opacity-100 gap-0">
            {RestaurantName}
          </div>
        </div>
        <div className="w-[235px] h-[48px] my-[10px] opacity-100">
          <p className="w-[230px] h-[48px] gap-0 opacity-100 font-inter font-extralight text-[15px] leading-[15.75px] text-left text-[#000000]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to...
          </p>
        </div>
      </div>
      <div
        className="w-[262px] h-[108px] py-[0px] px-[15px] rounded-[10px] gap-[20px] opacity-100 flex items-center"
        style={{ backgroundColor: "#0080000D" }}
      >
        <div className="w-[80px] h-[80px] gap-[20px] opacity-100 my-[15px]">
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              gap: 0,
              opacity: 100,
              backgroundColor: "#FF8100",
              position: "relative",
            }}
          >
            <BatteryChargingFullIcon sx={{ width: "80px", height: "60px" }} />
          </Avatar>
        </div>
        <div className="w-[132px] h-[66px] gap-0 opacity-100">
          <div className="w-[132px] h-[19px] gap-0 opacity-100">
            <p className="w-[132px] h-[11px] gap-0 opacity-100 font-inter text-[12px] leading-[11.36px] tracking-[0.03em] font-normal text-[#000000]">
              Number of order
            </p>
          </div>
          <div className="w-[64px] h-[47px] gap-[10px] opacity-100">
            <p className="w-[64px] h-[47px] gap-0 opacity-100 font-roboto font-bold text-[50px] leading-[43.34px] trackinkg-[0.03em] text-[#FF8100]">
              {NumberOfOrder}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantsCard;
