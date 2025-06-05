"use client";
import React, { useState } from "react";

const MIN = 0;
const MAX = 100;

const Price: React.FC = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="bg-base-100 rounded-xl shadow  p-6 min-w-80 w-full ">
      <div className="flex items-center gap-2 mb-4">
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={12} cy={12} r={10} />
          <path d="M12 8v4" />
          <path d="M12 16v.01" />
        </svg>
        <span className="font-semibold text-base-content text-lg">Price range</span>
      </div>
      <div className="flex justify-center items-center my-4">
        <span className="text-6xl font-light font-bold text-base-content">{value}</span>
      </div>
      <div className="w-full flex items-center">
        <div className="relative w-full h-6">
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            className="absolute w-full h-6 opacity-0 cursor-pointer z-10"
          />
          <div className="w-full h-4 rounded-full bg-base-200 flex items-center">
            <div
              className="h-4 rounded-full bg-base-content"
              style={{
                width: `${((value - MIN) / (MAX - MIN)) * 100}%`,
                transition: "width 0.2s",
              }}
            />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2"
              style={{
                left: `calc(${((value - MIN) / (MAX - MIN)) * 100}% - 18px)`,
                transition: "left 0.2s",
              }}
            >
              <div className="w-7 h-7 rounded-full border-4 border-base-100 bg-base-content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;