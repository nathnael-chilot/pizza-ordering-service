import React from "react";
import RelatedCard from "./RelatedCard";

const Related = () => {
  return (
    <div className="w-[1345px] h-[721px] gap-[25px] opacity-100">
      <div className="relative w-[1345px] h-[75px] font-inter text-[50px] mt-[95.5px] mb-[25px] font-bold leading-[75px] text-left text-[#00000080] opacity-100 gap-0">
        Related
      </div>
      <div className="h-[452px] flex items-center gap-[25px] overflow-x-scroll">
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
      </div>
    </div>
  );
};

export default Related;
