import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-8 py-10">
      <h1 className="text-4xl text-white">{title}</h1>
      <div className="w-1/6 h-[2px] bg-secondary mt-4"></div>
    </div>
  );
}

export default SectionTitle;
