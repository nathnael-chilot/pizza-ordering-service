import React from "react";
import PopularPizzasCard from "./PopularPizzasCard";

const PopularPizzas = () => {
  return (
    <div className="w-full max-w-screen h-[2292px] gap-0 opacity-100 px-[89.5px] py-[76px] bg-[#FFF8F1] overflow-x-hidden">
      <div className="w-[1261px] h-[2138px] gap-[50px] top-[76.5px] left-[89px] opacity-100">
        <div className="w-[1261px] h-[1367px] gap-[25px] opacity-100">
          <p className="w-[1261px] h-[75px] font-inter leading-[75px] text-[50px] text-left text-[#00000080] font-medium gap-0 opacity-100">
            Popular Pizzas
          </p>
          <div className="w-[1261px] h-[621px] gap-[50px] opacity-100 flex my-[25px]">
            <PopularPizzasCard />
            <PopularPizzasCard />
            <PopularPizzasCard />
          </div>
          <div className="w-[1261px] h-[621px] gap-[50px] opacity-100 flex">
            <PopularPizzasCard />
            <PopularPizzasCard />
            <PopularPizzasCard />
          </div>
        </div>
        <div className="w-[1345px] h-[721px] gap-[25px] opacity-100">
          <div className="w-[1345px] h-[75px] font-inter text-[50px] mt-[50px] mb-[25px] font-medium leading-[75px] text-left text-[#00000080] opacity-100 gap-0">
            Fasting
          </div>
          <div className="flex items-center gap-[25px] overflow-x-scroll">
            <PopularPizzasCard />
            <PopularPizzasCard />
            <PopularPizzasCard />
            <PopularPizzasCard />
            <PopularPizzasCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPizzas;
