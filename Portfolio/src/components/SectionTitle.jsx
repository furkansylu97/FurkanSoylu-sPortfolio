import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4 lg:gap-8 py-1 lg:py-10">
      <h1 className="text-xl lg:text-4xl text-white">{title}</h1>
      <div className="w-1/6 h-[1px] lg:h-[2px] bg-secondary mt-2 lg:mt-4"></div>
    </div>
  );
}

export default SectionTitle;
