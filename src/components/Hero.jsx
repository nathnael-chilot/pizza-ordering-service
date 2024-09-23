import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <div className="relative w-[766px] h-[501px] left-[85px] gap-[50px] opacity-100">
      <div className="w-[766px] h-[333px]">
        <h1 className="font-inter w-[634px] h-[225px] text-left font-bold text-[150px] leading-[225px] bg-gradient-to-r from-[#FF8100] to-[#FFBE71] bg-clip-text text-transparent">
          Order us
        </h1>
        <p className="w-[766px] h-[108px] mb-[50px] opacity-[0.9] font-inter text-[25px] font-normal leading-[36.17px] tracking-[0.03em] text-[#050505]">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </p>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[748px] h-[118px] opacity-1 rounded-[60px] shadow-[0px_5px_50px_0px_#00000026] p-4 pr-[120px]" // Add right padding for the button
          />
          <button className="absolute right-[25px] w-[106px] h-[106px] rounded-full opacity-100 bg-[#FF890F] flex items-center justify-center">
            {/* Add button content here, e.g., an icon */}
            <span className="text-white">
              <SearchIcon />
            </span>
          </button>
        </div>
      </div>
      <div
        className="absolute w-[214px] h-[239px] top-[74px] left-[870.5px] gap-0 opacity-100"
        style={{ transform: "rotate(-10deg)" }}
      >
        <img src="/assets/heroleaf.png" alt="hero leaf" />
      </div>
      <div
        className="absolute w-[214px] h-[239px] top-[380px] left-[950px] gap-0 opacity-100"
        style={{ transform: "rotate(-199.73deg)" }}
      >
        <img src="/assets/heroleaf.png" alt="hero leaf" />
      </div>
      <div
        className="absolute w-[794px] h-[400px] top-[1px] left-[800px] gap-0 opacity-100"
        style={{ transform: "rotate(-90deg)" }}
      >
        <img
          src="/assets/heropizza.png"
          alt="hero pizza"
          className="w-[594px] h-[606px] top-[255px] left-[-137px] object-cover"
          style={{ transform: "rotate(-60deg)" }}
        />
      </div>
    </div>
  );
};

export default Hero;
