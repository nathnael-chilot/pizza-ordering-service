import React from "react";
import { Avatar } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Related from "./Related";

const Order = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="w-full max-w-screen overflow-x-hidden h-[1251px] gap-0 opacity-100 bg-[#FFF8F1]">
      <div className="relative w-[1280px] h-[500px] flex items-center top-[51px] left-[50.5px] right-[49.5px] gap-[70px] opacity-100">
        <div className="relative w-[748px] h-[500px] gap-[40px] opacity-100 flex items-center">
          <div className="w-[500px] h-[500px] gap-0 opacity-100">
            <div className="w-[500px] h-[500px] flex items-center justify-center rounded-full gap-0 opacity-100 bg-[#EA810033]">
              <Avatar
                alt="restaurant"
                src="/assets/heropizza.png"
                sx={{
                  width: "368px",
                  height: "368px",
                  position: "relative",
                  gap: "0px",
                  opacity: 100,
                  transform: "rotate(0deg)",
                }}
              />
            </div>
          </div>
          <div className="w-[208px] h-[466px] gap-[50px] opacity-100">
            <div className="w-[208px] h-[208px] gap-0 opacity-100">
              <div className="w-[208px] h-[208px] gap-0 opacity-100 rounded-full bg-[#D9D9D9]">
                <Avatar
                  alt="restaurant"
                  src="/assets/heropizza.png"
                  sx={{
                    width: "173px",
                    height: "173px",
                    top: "16px",
                    left: "17px",
                    position: "relative",
                    gap: "0px",
                    opacity: 100,
                    transform: "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <div className="w-[208px] h-[208px] gap-0 opacity-100">
              <div className="w-[208px] h-[208px] my-4 gap-0 opacity-100 rounded-full flex items-center justify-center bg-[#0201014D]">
                <Avatar
                  alt="restaurant"
                  src="/assets/heropizza.png"
                  sx={{
                    width: "173px",
                    height: "173px",
                    position: "relative",
                    gap: "0px",
                    opacity: 100,
                    transform: "rotate(0deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[522px] h-[379px] gap-[20px] opacity-100">
          <div className="w-[522px] h-[203px] gap-[20px] opacity-100">
            <div className="w-[418px] h-[379px] gap-[20px] opacity-100">
              <p className="w-[418px] h-[76px] gap-[20px] opacity-100 font-roboto text-[80px] font-bold leading-[75.75px] tracking-[0.03em] text-left text-[#000000]">
                Margherita
              </p>
              <div className="w-[412px] h-[107px] flex items-center gap-[15px] opacity-100">
                <div className="w-[126px] h-[46px] flex items-center gap-[3px] opacity-100">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      width: "21px",
                      height: "21px",
                      top: "3.5px",
                      left: "3.5px",
                      color: "#FF8100",
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  <div className="w-[80px] h-[24px] gap-0 opacity-100">
                    <p className="w-[80px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                      Mozzarella
                    </p>
                  </div>
                </div>
                <div className="w-[102px] h-[46px] flex items-center gap-[3px] opacity-100">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      width: "21px",
                      height: "21px",
                      top: "3.5px",
                      left: "3.5px",
                      color: "#FF8100",
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  <div className="w-[80px] h-[24px] gap-0 opacity-100">
                    <p className="w-[80px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                      Tomato
                    </p>
                  </div>
                </div>
                <div className="w-[141px] h-[46px] flex items-center gap-[3px] opacity-100">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      width: "21px",
                      height: "21px",
                      top: "3.5px",
                      left: "3.5px",
                      color: "#FF8100",
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  <div className="w-[80px] h-[24px] gap-0 opacity-100">
                    <p className="w-[80px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                      Bell Peppers
                    </p>
                  </div>
                </div>
                <div className="w-[97px] h-[46px] flex items-center gap-[3px] opacity-100">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      width: "21px",
                      height: "21px",
                      top: "3.5px",
                      left: "3.5px",
                      color: "#FF8100",
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  <div className="w-[80px] h-[24px] gap-0 opacity-100">
                    <p className="w-[80px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                      Tomato
                    </p>
                  </div>
                </div>
                <div className="w-[90px] h-[46px] flex items-center gap-[3px] opacity-100">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      width: "21px",
                      height: "21px",
                      top: "3.5px",
                      left: "3.5px",
                      color: "#FF8100",
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  <div className="w-[80px] h-[24px] gap-0 opacity-100">
                    <p className="w-[80px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                      Tomato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[395px] h-[60px] gap-[35px] opacity-100 flex items-center justify-center">
            <div className="w-[249px] h-[60px] gap-[50px] flex items-center justify-center opacity-100">
              <div className="w-[70px] h-[60px] p-[10px_15px] gap-[8px] rounded-[10px] border-2 opacity-100 bg-white border-solid border-[#FF8100]">
                <span className="w-[40px] h-[40px] flex justify-center items-center text-4xl font-bold">
                  -
                </span>
              </div>
              <span className="w-[9px] h-[42px] font-inter font-normal text-[32px] leading-[41.66px] gap-0 opacity-100">
                1
              </span>
              <div className="w-[70px] h-[60px] p-[10px_15px] gap-[8px] rounded-[10px] border-2 opacity-100 bg-white border-solid border-[#FF8100]">
                <span className="w-[40px] h-[40px] flex justify-center items-center text-4xl font-bold">
                  +
                </span>
              </div>
            </div>
            <div className="w-[111px] h-[45px] gap-[5px] opacity-100 flex">
              <p className="w-[81px] h-[45px] gap-0 opacity-100 font-roboto text-[45px] leading-[44.55px] tracking-[0.03em] font-bold text-[#01C550]">
                150
              </p>
              <p className="w-[25px] h-[15px] gap-0 opacity-100 font-roboto text-[15px] leading-[14.85px] tracking-[0.03em] font-normal text-[#000000BF]">
                Birr
              </p>
            </div>
          </div>
          <Button
            sx={{
              width: "450px",
              height: "76px",
              gap: 0,
              borderRadius: "10px",
              opacity: 100,
              backgroundColor: "#FF9921",
              "&:hover": {
                backgroundColor: "#FF9921",
              },
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "46.3px",
              letterSpacing: "0.03em",
              textAlign: "left",
              justifyContent: "flex-start",
              mt: "20px",
              pl: "30px",
              pr: "30px",
              pb: "15px",
              pt: "15px",
            }}
            variant="contained"
          >
            Order
          </Button>
        </div>
      </div>
      <div>
        <Related />
      </div>
    </div>
  );
};

export default Order;
