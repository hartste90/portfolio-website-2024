"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
// import squiggle from "squiggle.svg";
const squiggle1path =
  // "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852";
  "M-38 -104C183.944 90.2027 -16.2266 211.163 82.9922 377.185C151.247 491.396 380.8 514.768 416.149 364.678C451.497 214.59 336.42 137.458 270.928 191.657C205.434 245.856 168.417 360.506 211.129 589.809C254.999 825.324 36.5067 719.038 51.2797 949.586C82.9915 1444.49 582.503 1388.48 481.184 1161.47C379.865 934.459 -68.5001 1469 719 1513C914.573 1516.45 1277.29 1725 938 1725C-334.5 1725 -7.49997 2186 -38 2186";
// "M118.006 15C359.23 88.6532 473.82 227.776 526.994 517.431C603.348 933.353 849.376 611.546 748.115 398.326C646.854 185.106 153.52 603.68 359.23 1166.13C518.697 1602.14 853.178 2333.79 915.37 1772.29C993.11 1070.42 -292.589 3063.84 359.23 2744.81C1011.05 2425.78 1064.87 2322.09 969.19 2617.2C873.51 2912.3 472.85 4059.76 430.99 3597.69C389.13 3135.63 969.19 2944.21 969.19 3996.48C969.19 5048.76 209.731 3701.38 299.43 4203.85C389.13 4706.33 239.631 6021.81 299.43 5973.95C359.23 5926.1 1190.26 5487.96 969.19 6245.13C748.115 7002.3 535.154 7900.17 359.23 7464.9C129.365 6896.17 957.23 7289.96 694.11 7744.05C589.013 7925.43 430.99 7965.06 6.5 8015";
const Squiggle2: React.FC = () => {
  const squiggleRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  if (typeof window !== "undefined") {
    const scroll = () => {
      const svg = squiggleRef.current;
      if (svg) {
        const path = pathRef.current;
        if (path) {
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
            style={{ strokeDasharray: "18000", strokeDashoffset: "18000" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Squiggle2;
