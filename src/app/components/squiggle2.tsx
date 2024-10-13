"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
// import squiggle from "squiggle.svg";
const squiggle1path =
  "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852";
// "M79 13C330.983 183 318.5 276 436.674 526.5C608.839 891.449 841 615 714 414.5C587 214 116.326 925 234.5 1146.5C352.674 1368 945.5 1225 993 1466M993 1466C1026.11 1634 45 1499 19 1961.5C19 2236.5 1357 1611.5 993 1466ZM993 1466C629 1320.5 -79.6387 2498.56 502 2460C1052.5 2423.5 1035.8 3582 736 3582C-388.374 3582 621.5 3088.5 273.5 3847C19 4366 1265.5 3883 819 4272.5C382.6 4617.7 1042.5 5566 351.5 4922C-339.5 4278 1182.5 4792 1006 5182C819.513 5594.07 5.28209 5893.19 195.5 6153C564.5 6657 1323 5960.5 1006 5836C689 5711.5 117.5 7992 195.5 8142.5";
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
        // viewBox="0 0 1101 8158"
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
            style={{ strokeDasharray: "5000", strokeDashoffset: "5000" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Squiggle2;
