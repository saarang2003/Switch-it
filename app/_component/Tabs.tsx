"use client"
import React, { useState } from "react";

const tabs = [
  { label: "Tab 1", content: "Tab content 1" },
  { label: "Tab 2", content: "Tab content 2" },
  { label: "Tab 3", content: "Tab content 3" },
];

const Tabs: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full max-w-sm min-w-[200px] px-2 py-2 rounded-xl shadow-xl bg-base-200">
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-0.5 ">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-2 rounded-t-lg border border-b-0 border-base-300 text-base-content cursor-pointer font-medium transition
              ${active === idx
                ? "bg-base-100"
                : "bg-base-200 hover:bg-base-100/70"
              }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-b-lg border border-base-300 bg-base-100 p-6 text-base-content">
        {tabs[active].content}
      </div>
    </div>
    </div>
  );
};

export default Tabs;


