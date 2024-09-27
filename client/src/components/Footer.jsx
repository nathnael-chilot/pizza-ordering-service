import React from "react";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
      <div className="w-full max-w-screen overflow-x-hidden h-[241px] gap-0 opacity-100 bg-[#CCB691]">
        <div className="w-[132.47px] h-[50px] flex items-center top-[22px] left-[1109px] gap-[15.58px] opacity-100 relative">
          <img
            src="/assets/logo_pizza.png"
            alt="Logo"
            className="w-50.83 h-50 top-22 left-1109"
          />
          <span className="w-[66.06px] h-[19.48px] top-[36.78] left-[1175.41px] font-bold text-[#AF5901] text-left opacity-100">
            Pizza
          </span>
        </div>
        <div className="w-[1312px] h-[62px] top-[60px] left-[64px] gap-0 opacity-100 flex items-center justify-between relative">
          <div className="w-[366px] h-[36px] gap-[50px] flex items-center opacity-100">
            <div className="w-[74px] h-[36px] gap-0 opacity-100">
              <a
                href="#home"
                className="w-[74px] h-[36px] font-inter text-[25px] font-semibold leading-[36.17px] tracking-[0.03em] text-left text-[#000000] hover:text-[#000000]"
              >
                Home
              </a>
            </div>
            <div className="w-[74px] h-[36px] gap-0 opacity-100">
              <a
                href="#order"
                className="w-[73px] h-[36px] font-inter text-[25px] font-semibold leading-[36.17px] tracking-[0.03em] text-left text-[#000000] hover:text-[#000000]"
              >
                Order
              </a>
            </div>
            <div className="w-[118px] h-[36px] gap-0 opacity-100">
              <a
                href="#about"
                className="w-[118px] h-[36px] font-inter text-[25px] font-semibold leading-[36.17px] tracking-[0.03em] text-left text-[#000000] hover:text-[#000000]"
              >
                About As
              </a>
            </div>
          </div>
          <dvi className="w-[423px] h-[62px] gap-[20px] mr-[20px] opacity-100">
            <input
              placeholder="Your feedback..."
              className="w-[380px] h-[62px] border-[1px] rounded-[12px] justify-between py-[18px] px-[24px] bg-[#FFFFFF] gap-0 opacity-100"
              style={{ borderColor: "#26262680" }}
            />
            <button className="w-[30px] h-[30px]  gap-0 opacity-100">
              <SendIcon sx={{}} />
            </button>
          </dvi>
        </div>
      </div>
      <div className="w-full max-w-screen overflow-x-hidden h-[104px] flex border-t py-[16px] px-[162px] gap-[355px] opacity-100 bg-black">
        <div className="w-[448px] h-[44px] gap-[38px] py-[10px] opacity-100 flex items-center">
          <p className="w-[256px] h-[24px] font-Urbanist text-[18px] font-medium leading-[24px] tracking-[0.006em] text-left text-white gap-0 opacity-100">
            @2024 Pizza All Rights Reserved.
          </p>
          <p className="w-[154px] h-[24px] font-Urbanist text-[18px] font-medium leading-[24px] tracking-[0.006em] text-left text-white gap-0 opacity-100">
            Terms & Conditions
          </p>
        </div>
        <div className="w-[238px] h-[72px] py-[10px] gap-[10px] flex items-center opacity-100">
          <Avatar
            sx={{
              width: "52px",
              height: "52px",
              gap: "10px",
              opacity: 100,
              padding: "14px",
              borderRadius: "58px",
              backgroundColor: "#141414",
              position: "relative",
            }}
          >
            <FacebookIcon sx={{ width: "24px", height: "624px" }} />
          </Avatar>
          <Avatar
            sx={{
              width: "52px",
              height: "52px",
              gap: "10px",
              opacity: 100,
              padding: "14px",
              borderRadius: "58px",
              backgroundColor: "#141414",
              position: "relative",
            }}
          >
            <LinkedInIcon sx={{ width: "24px", height: "624px" }} />
          </Avatar>
          <Avatar
            sx={{
              width: "52px",
              height: "52px",
              gap: "10px",
              opacity: 100,
              padding: "14px",
              borderRadius: "58px",
              backgroundColor: "#141414",
              position: "relative",
            }}
          >
            <TwitterIcon sx={{ width: "24px", height: "624px" }} />
          </Avatar>
          <Avatar
            sx={{
              width: "52px",
              height: "52px",
              gap: "10px",
              opacity: 100,
              padding: "14px",
              borderRadius: "58px",
              backgroundColor: "#141414",
              position: "relative",
            }}
          >
            <YouTubeIcon sx={{ width: "24px", height: "624px" }} />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Footer;
