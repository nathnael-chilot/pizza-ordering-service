import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-[75px] max-w-[1440px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/logo_pizza.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="w-[66.06px] h-[19.48px] font-bold text-[#AF5901] text-left opacity-100">
            Pizza
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          className="w-[605px] h-[36px] top-[24px] left-[392px] 
          flex items-center justify-between gap-0 opacity-100"
        >
          <li>
            <a
              href="/"
              className="font-inter text-[25px] font-bold leading-[36.17px] tracking-[0.03em] text-left text-[#FF8100] hover:text-[#FF8100]"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/orders"
              className="w-[86px] h-[36px] gap-0 opacity-100 font-inter text-[25px] font-medium leading-[36.17px] tracking-[0.03em] text-left text-[#16120DBF] hover:text-[#FF8100]"
            >
              Orders
            </a>
          </li>

          <li>
            <a
              href="/whoweare"
              className="w-[144px] h-[36px] gap-0 opacity-100 font-inter text-[25px] font-medium leading-[36.17px] tracking-[0.03em] text-left text-[#16120DBF] hover:text-[#FF8100]"
            >
              who we are
            </a>
          </li>
        </ul>

        {/* Register Button */}
        <div>
          <Link to="/register">
            <button
              className="w-[168px] h-[56px] top-[14px] left-[1244px] 
  px-[30px] py-[10px] gap-0 rounded-[5px] bg-[#FF890F] opacity-100"
            >
              <span className="w-[108px] h-[36px] font-inter text-[25px] font-bold leading-[36.17px] tracking-[0.03em] text-left text-white">
                Register
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
