"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
// import squiggle from "squiggle.svg";
const squiggle1path =
  "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852";
const Squiggle2: React.FC = () => {
  const squiggleRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  if (typeof window !== "undefined") {
    const scroll = () => {
      const svg = squiggleRef.current;
      if (svg) {
        const path = pathRef.current;
        if (path) {
          console.log("Path is valid");
          const distance = window.scrollY;
          const totalDistance = svg.clientHeight - window.innerHeight;
          const percentage = distance / totalDistance;

          const pathLength = path.getTotalLength();

          path.style.strokeDasharray = `${pathLength}`;
          path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
        }
      }
    };
    scroll();
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", scroll);
  }

  return (
    <div className="absolute w-full">
      <svg
        ref={squiggleRef}
        className="squiggle2"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5_2)">
          <path
            ref={pathRef}
            d={squiggle1path}
            stroke="#CD3C2F"
            stroke-width="30"
            stroke-linejoin="round"
            style={{ strokeDasharray: "5250", strokeDashoffset: "5300" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Squiggle2;
