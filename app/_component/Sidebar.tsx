"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

const MIN_WIDTH_PERCENT = 15;
const MAX_WIDTH_PERCENT = 30;
const DEFAULT_WIDTH_PERCENT = 20;

const ResizableSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [widthPercent, setWidthPercent] = useState(DEFAULT_WIDTH_PERCENT);

  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !sidebarRef.current) return;
      const totalWidth = window.innerWidth;
      let newPercent = (e.clientX / totalWidth) * 100;
      newPercent = Math.max(MIN_WIDTH_PERCENT, Math.min(MAX_WIDTH_PERCENT, newPercent));
      setWidthPercent(newPercent);
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
      return () => {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResizing);
      };
    }
  }, [isResizing, resize, stopResizing]);

  return (
    <div
      ref={sidebarRef}
      className="relative h-auto bg-accent text-white flex flex-col justify-start items-center"
      style={{ width: `${widthPercent}%`, minWidth: `${MIN_WIDTH_PERCENT}%`, maxWidth: `${MAX_WIDTH_PERCENT}%`, transition: isResizing ? "none" : "width 0.2s" }}
    >
      {children}
      {/* Resizer handle */}
      <div
        className="absolute top-0 right-0 h-full w-2 cursor-ew-resize z-10"
        onMouseDown={startResizing}
        style={{ userSelect: "none" }}
      >
        <div className="w-1 h-16 bg-white/40 rounded-full mx-auto mt-8" />
      </div>
    </div>
  );
};

export default ResizableSidebar;