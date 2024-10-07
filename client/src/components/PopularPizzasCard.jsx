import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const PopularPizzasCard = () => {
  return (
    <div className="w-[387px] h-[621px] pt-[30px] gap-[15px] rounded-[25px] opacity-100 bg-white">
      <div className="w-[327px] h-[466px] gap-[10px] opacity-100 ml-[30px]">
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
        <div className="w-[327px] h-[138px] gap-[10px] opacity-100">
          <div className="w-[307px] h-[62px] gap-[10px] opacity-100">
            <p className="w-[131px] h-[24px] gap-0 opacity-100 font-roboto text-[25px] leading-[23.67px] tracking-[0.03em] font-bold text-[#000000]">
              Margherita
            </p>
            <div className="w-[307px] h-[28px] gap-0 opacity-100 mt-[10px] font-roboto text-[15px] leading-[14.2px] tracking-[0.03em] font-normal text-[#000000]">
              <p>Tomato, Mozzarella, Bell Peppers, Onions, Olives</p>
            </div>
          </div>
          <div className="w-[327px] h-[66px] gap-0 opacity-100 mt-[20.5px] flex items-center justify-between">
            <div className="w-[111px] h-[45px] gap-[5px] opacity-100 flex">
              <p className="w-[81px] h-[45px] gap-0 opacity-100 font-roboto text-[45px] leading-[44.55px] tracking-[0.03em] font-bold text-[#01C550]">
                150
              </p>
              <p className="w-[25px] h-[15px] gap-0 opacity-100 font-roboto text-[15px] leading-[14.85px] tracking-[0.03em] font-normal text-[#000000BF]">
                Birr
              </p>
            </div>
            <Button
              sx={{
                width: "188px",
                height: "66px",
                gap: "10px",
                borderRadius: "10px",
                padding: "10px 0px 0px 0px",
                opacity: 100,
                backgroundColor: "#FF9921",
                "&:hover": {
                  backgroundColor: "#FF9921",
                },
                color: "#FDFFFE",
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "46.3px",
                letterSpacing: "0.03em",
                textAlign: "center",
                justifyContent: "flex-center",
              }}
              component={Link}
              to="/register"
              variant="contained"
            >
              Order
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[327px] h-0 gap-0 ml my-[15px] mx-[30px] border-t border-solid border-[#00000033] opacity-100"></div>
      <div className="w-[327px] h-[65px] mx-[30px] gap-0 opacity-100 flex items-center justify-between">
        <Avatar
          alt="restaurant"
          src="/assets/res1.png"
          sx={{
            width: "65px",
            height: "65px",
            gap: "0px",
            opacity: 100,
            background: "[#D9D9D9]",
          }}
        />
        <p className="w-[150px] h-[19px] gap-0 opacity-100 font-roboto text-[20px] leading-[18.94px] tracking-[0.03em] font-bold text-[#000000]">
          Azmera Pizza
        </p>
      </div>
    </div>
  );
};

export default PopularPizzasCard;
