import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddMenu = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="relative p-[50px_51px_340px_51px] bg-white opacity-100 shadow-[0px_0px_15px_0px_#0000000D]">
      <div className="w-[1040px] h-[535px] top-[50px] left-[51px] gap-[30px] opacity-100 flex flex-col items-center">
        <div className="w-[140px] h-[24px] rounded-[4px] px-[16px] gap-[8px] opacity-100">
          <span className="w-[108px] h-[24px] gap-0 opacity-100 font-inter font-normal text-[22px] leading-[24px] text-[#525256]">
            Add Menu
          </span>
        </div>
        <div className="w-[1040px] h-[377px] flex flex-col items-center gap-[25px] opacity-100">
          <div className="w-[1040px] h-[278px] gap-[25px] opacity-100 flex flex-col items-center">
            <div className="relative w-[459px] h-[278px] gap-[20px] opacity-100">
              <TextField fullWidth label="Name" id="fullWidth" />
              <div className="relative w-[459px] h-[126px] gap-[10px] my-[20px] opacity-100">
                <span className="w-[99px] h-[24px] font-roboto font-normal text-[22px] leading-[24px] tracking-[0.15px] text-[#00000080] gap-0 opacity-100">
                  Topping
                </span>
                <div className="w-[459px] h-[140px] flex text-wrap gap-[15px] opacity-100">
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
                    <div className="w-[56px] h-[24px] gap-0 opacity-100">
                      <p className="w-[56px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
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
                    <div className="w-[95px] h-[24px] gap-0 opacity-100">
                      <p className="w-[95px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
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
                    <div className="w-[51px] h-[24px] gap-0 opacity-100">
                      <p className="w-[51px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
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
                    <div className="w-[44px] h-[24px] gap-0 opacity-100">
                      <p className="w-[44px] h-[24px] gap-0 opacity-100 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.15px] text-left">
                        Olives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TextField fullWidth label="Price" id="fullWidth" />
            </div>
          </div>
          <Button
            sx={{
              top: "25px",
              left: "58px",
              gap: "8px",
              borderRadius: "4px",
              opacity: 100,
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
              color: "#FF8100",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0.03em",
              textAlign: "left",
              justifyContent: "flex-start",
              px: "16px",
            }}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<FileUploadOutlinedIcon />}
          >
            Upload Pizza Photo
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </div>
        <Button
          sx={{
            width: "321px",
            height: "74px",
            top: "25px",
            left: "117.5px",
            gap: "8px",
            borderRadius: "25px",
            opacity: 100,
            backgroundColor: "#FF8100",
            "&:hover": {
              backgroundColor: "#FF8100",
            },
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: "0.03em",
            textAlign: "center",
            justifyContent: "flex-center",
            px: "16px",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddMenu;
