import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Button } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExampleWithProviders from "./OrdersTable";
import AddMenu from "./AddMenu";

const SideBar = () => {
  // State to manage the active button's text
  const [activeText, setActiveText] = useState("Orders");

  // Handler to update the active text
  const handleButtonClick = (text) => {
    setActiveText(text);
  };

  return (
    <div className="flex items-start justify-center bg-slate-100">
      <div className="w-[258px] h-[1024px] gap-0 opacity-100 bg-white">
        <div className="w-[258px] h-[67px] gap-0 opacity-100 bg-[#F3F3F340] flex items-center">
          <span className="w-[41px] h-[17px] top-[25px] left-[10px] gap-0 opacity-100 font-inter text-[14px] font-medium leading-[16.94px] text-left text-black">
            PIZZA
          </span>
          <div className="w-[36px] h-[36px] left-[184px] p-[6px_3px] gap-0 opacity-100 relative">
            <MenuOpenIcon sx={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="w-[258px] h-[113px] top-[67px] p-[31px_0_32px_0] flex items-center justify-center gap-0 border-t border-b border-solid border-[#0000000D] opacity-100 bg-[#FF81000D]">
          <img
            src="/assets/logo_pizza.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
        </div>
        <div className="w-[251px] h-[279px] top-[180px] left-[3px] gap-[20px] opacity-100">
          <div className="w-[251px] h-[191px] gap-[5px] opacity-100">
            <Button
              variant="outlined"
              startIcon={<LibraryAddIcon />}
              onClick={() => handleButtonClick("Orders")}
              sx={{
                width: "251px",
                height: "44px",
                padding: "0px 40px 0px 0px",
                gap: "2px",
                borderRadius: "3px 0px 0px 0px",
                opacity: 100,
                background: "#FF810066",
                borderColor: "#FF810066",
                color: "#FF8100",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16.94px",
                textAlign: "left",
                "&:hover": {
                  background: "#FF810077",
                  borderColor: "#FF810077",
                },
              }}
            >
              Orders
            </Button>
            <Button
              variant="outlined"
              startIcon={<LibraryAddIcon />}
              onClick={() => handleButtonClick("Add Menu")}
              sx={{
                width: "251px",
                height: "44px",
                padding: "0px 40px 0px 0px",
                gap: "2px",
                borderRadius: "3px 0px 0px 0px",
                opacity: 100,
                background: "#FF810066",
                borderColor: "#FF810066",
                color: "#FF8100",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16.94px",
                textAlign: "left",
                "&:hover": {
                  background: "#FF810077",
                  borderColor: "#FF810077",
                },
              }}
            >
              Add Menu
            </Button>
            <Button
              variant="outlined"
              startIcon={<PersonOutlineOutlinedIcon />}
              onClick={() => handleButtonClick("Role")}
              sx={{
                width: "251px",
                height: "44px",
                padding: "0px 40px 0px 0px",
                gap: "2px",
                borderRadius: "3px 0px 0px 0px",
                opacity: 100,
                background: "#FF810066",
                borderColor: "#FF810066",
                color: "#FF8100",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16.94px",
                textAlign: "left",
                "&:hover": {
                  background: "#FF810077",
                  borderColor: "#FF810077",
                },
              }}
            >
              Role
            </Button>
            <Button
              variant="outlined"
              startIcon={<AccountCircleOutlinedIcon />}
              onClick={() => handleButtonClick("User")}
              sx={{
                width: "251px",
                height: "44px",
                padding: "0px 40px 0px 0px",
                gap: "2px",
                borderRadius: "3px 0px 0px 0px",
                opacity: 100,
                background: "#FF810066",
                borderColor: "#FF810066",
                color: "#FF8100",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16.94px",
                textAlign: "left",
                "&:hover": {
                  background: "#FF810077",
                  borderColor: "#FF810077",
                },
              }}
            >
              User
            </Button>
          </div>
          <div className="w-auto h-auto p-[10px_17px] gap-[5px] border-t border-solid border-[#0000001A] opacity-100">
            <Button
              variant="outlined"
              startIcon={<LogoutIcon sx={{ color: "#FF0000" }} />}
              sx={{
                width: "190px",
                height: "auto",
                padding: "12px 46px",
                gap: "10px",
                borderRadius: "8px 0px 0px 0px",
                opacity: 100,
                "&:hover": {
                  opacity: 100,
                },
                "& .MuiButton-startIcon": {
                  color: "#FF0000",
                },
                "& .MuiButton-label": {
                  width: "68px",
                  height: "24px",
                  opacity: 100,
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#FF0000",
                },
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="w-[1090px] h-[67px] pl-[23px] pr-[30px] pt-[20px] pb-[20px] gap-0 border-l border-solid border-[#0000000D] opacity-100 bg-white shadow-[7px_0px_15px_#0000000D] flex items-center justify-between">
          <span className="w-auto h-[27px] top-[20px] left-[23px] font-inter font-normal text-[22px] leading-[26.63px] text-[#000000] gap-0 opacity-100">
            {activeText}
          </span>
          <div className="w-[88px] h-[24px] top-[21px] gap-[40px] opacity-100 flex items-center justify-between">
            <NotificationsOutlinedIcon
              sx={{ width: "34.5px", height: "34.5px" }}
            />
            <AccountCircleOutlinedIcon
              sx={{ width: "34.5px", height: "34.5px" }}
            />
          </div>
        </div>
        <div className="w-[1142px] h-[925px] top-[87px] left-[278px] rounded-[5px] gap-0 opacity-100">
          {/* <ExampleWithProviders /> */}
          <AddMenu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
