import React from "react";
import PopularPizzasCard from "../PopularPizzasCard";

const OrdersPage = () => {
  return (
    <div>
      <div className="w-full max-w-screen overflow-x-hidden h-[1567px] gap-[25px] opacity-100 px-[89.5px] py-[76px] bg-[#FFF8F1]">
        <p className="w-[1261px] h-[75px] font-inter leading-[75px] text-[50px] text-left text-[#00000080] font-medium gap-0 opacity-100">
          Order History
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
    </div>
  );
};

export default OrdersPage;
