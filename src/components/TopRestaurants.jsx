import React from "react";
import TopRestaurantsCard from "./TopRestaurantsCard";

const TopRestaurants = () => {
  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      <div className="w-[1440px] h-[442px] px-[47px] pt-[94px] pb-[94px] pr-[48px] gap-0 opacity-100 bg-gradient-to-b from-[rgba(250,126,0,0)] via-[rgba(250,126,0,0.2)] to-[rgba(148,74,0,0)]">
        <div className="w-[1345px] h-[254px] top-[94px] left-[47px] gap-[25px] opacity-100">
          <div className="w-[1345px] h-[75px] font-inter text-[50px] font-medium leading-[75px] text-left text-[#00000080] opacity-1 gap-0">
            Top Restaurants
          </div>
          <div className="flex items-center gap-[30px] overflow-x-scroll">
            <TopRestaurantsCard
              RestaurantImage="/assets/res1.png"
              RestaurantName="Azmera Pizza"
              NumberOfOrder="2K"
            />
            <TopRestaurantsCard
              RestaurantImage="/assets/res1.png"
              RestaurantName="Azmera Pizza"
              NumberOfOrder="2K"
            />
            <TopRestaurantsCard
              RestaurantImage="/assets/res1.png"
              RestaurantName="Azmera Pizza"
              NumberOfOrder="2K"
            />
            <TopRestaurantsCard
              RestaurantImage="/assets/res1.png"
              RestaurantName="Azmera Pizza"
              NumberOfOrder="2K"
            />
            <TopRestaurantsCard
              RestaurantImage="/assets/res1.png"
              RestaurantName="Azmera Pizza"
              NumberOfOrder="2K"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurants;
