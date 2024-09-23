import React from "react";
import FeaturedPizza from "../FeaturedPizza";
import Hero from "../Hero";
import Navbar from "../NavBar";

const HomePage = () => {
  return (
    <div>
      <div className="w-full max-w-screen overflow-x-hidden h-[937px] gap-0 opacity-1 bg-gradient-to-b from-white via-[#FFC993] to-[#FFF8F1]">
        <Navbar />
        <Hero />
      </div>
      <div>
        <FeaturedPizza />
      </div>
    </div>
  );
};

export default HomePage;
