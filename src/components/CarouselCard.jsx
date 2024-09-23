import React from "react";
import Button from "@mui/material/Button";

const CarouselCard = ({ backgroundColor, imageSrc }) => {
  return (
    <div
      className="w-[1200px] h-[386px] gap-0 rounded-[40px] opacity-100 relative"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="absolute w-[581.74px] h-[97px] top-[38px] left-[71.64px] gap-0 opacity-100 text-white font-roboto text-[45px] font-bold leading-[43.06px] tracking-[0.03em] text-left">
        Make Your First Order
        <br />
        and Get
      </div>

      <div className="absolute w-[207.5px] h-[43px] top-[85px] left-[293.96px] gap-0 opacity-100 text-[#FF9921] font-roboto text-[45px] font-bold leading-[43.06px] tracking-[0.03em] text-left">
        50% Off
      </div>

      <div className="absolute w-[570.39px] h-[61px] top-[166px] left-[71.64px] gap-0 opacity-[0.9] text-white font-roboto text-[16px] font-normal leading-[23.15px] tracking-[0.03em] text-left">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without.
      </div>

      <Button
        sx={{
          width: "248.26px",
          height: "60px",
          position: "absolute",
          top: "281px",
          left: "71.64px",
          gap: 0,
          borderRadius: "5px",
          opacity: 100,
          backgroundColor: "#FF9921",
          "&:hover": {
            backgroundColor: "#FF9921",
          },
          color: "#FFFFFF",
          fontFamily: "Roboto",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "34.72px",
          letterSpacing: "0.03em",
          textAlign: "left",
          justifyContent: "flex-start",
          pl: "50px",
        }}
        variant="contained"
      >
        Order Now
      </Button>

      <div className="absolute w-[657.24px] h-[484.36px] left-[675px] gap-[10px] opacity-100">
        <img src={imageSrc} alt="carousel image" className="rounded-[40px]" />
      </div>
    </div>
  );
};

export default CarouselCard;
