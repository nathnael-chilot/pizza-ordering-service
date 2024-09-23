"use client";
import React from "react";
import CarouselCard from "./CarouselCard";
import { Carousel } from "flowbite-react";

const FeaturedPizza = () => {
  return (
    <div className="w-full max-w-screen overflow-x-hidden h-[706px] bg-[#FFF8F1]">
      <div className="relative w-[1266px] h-[531px] top-[65px] left-[87px] gap-[25px]">
        <p className="w-[1266px] h-[75px] font-inter text-[50px] font-medium leading-[75px] text-left text-[#00000080] opacity-1 gap-0">
          Featured Pizza
        </p>
        <Carousel slideInterval={1000}>
          <CarouselCard
            backgroundColor="#2F2F2F"
            imageSrc="/assets/carousel1.png"
          />
          <CarouselCard
            backgroundColor="#50482B"
            imageSrc="/assets/carousel2.png"
          />
          <CarouselCard
            backgroundColor="#296D60"
            imageSrc="/assets/carousel3.png"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedPizza;
