"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
// import squiggle from "squiggle.svg";
const squiggle1path =
  // "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852";
  "M-38 -104C183.944 90.2027 -16.2266 211.163 82.9922 377.185C151.247 491.396 380.8 514.768 416.149 364.678C451.497 214.59 336.42 137.458 270.928 191.657C205.434 245.856 168.417 360.506 211.129 589.809C254.999 825.324 36.5067 719.038 51.2797 949.586C82.9915 1444.49 582.503 1388.48 481.184 1161.47C379.865 934.459 -68.5001 1469 719 1513C914.573 1516.45 1277.29 1725 938 1725C-334.5 1725 -7.49997 2186 -38 2186";

const Squiggle: React.FC = () => {
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
        className="squiggle"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5_2)">
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

export default Squiggle;
