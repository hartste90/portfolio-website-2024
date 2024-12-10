import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Confetti: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".confetti",
      {
        rotation: 0,
      },
      {
        rotation: 360,

        duration: 5,
        ease: "none",
        repeat: -1,
      }
    );

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".confetti",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          //   markers: true,
        },
        defaults: { ease: "none" },
      })
      .to(".confetti", { y: "+=200" })
      .to(".confetti", { x: "+=40vw" })
      .to(".confetti", { y: "+=200" })
      .to(".confetti", { x: "+=50vw" })
      .to(".confetti", { y: "+=200" })
      .to(".confetti", { x: "+=20vw" });
  }, []);
  return (
    <div className="absolute top-[120vh] -left-[10px] w-2 h-2 z-10">
      {/* {pinwheel(150)} */}
      {circleIntersection(150)}
    </div>
  );
};

function pinwheel(size: Number) {
  return (
    <svg
      className="confetti"
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <defs>
        <linearGradient id="grad2">
          <stop offset="0%" stopColor="#a4a7ea" />
          <stop offset="50%" stopColor="#db6dd9" />
          <stop offset="100%" stopColor="#bd81d9" />
        </linearGradient>
      </defs>
      <path
        d="M480 240a160 160 0 0 0-240-138.6V0a160 160 0 0 0-138.6 240H0a160 160 0 0 0 240 138.6V480a160 160 0 0 0 138.6-240H480Z"
        fill="url(#grad2)"
      ></path>
    </svg>
  );
}

function circleIntersection(size: Number) {
  return (
    <svg
      className="confetti"
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <defs>
        <linearGradient id="grad2">
          <stop offset="0%" stopColor="#a4a7ea" />
          <stop offset="50%" stopColor="#db6dd9" />
          <stop offset="100%" stopColor="#bd81d9" />
        </linearGradient>
      </defs>
      <path d="M480 240a160 160 0 0 0-240-138.6V0a160 160 0 0 0-138.6 240H0a160 160 0 0 0 240 138.6V480a160 160 0 0 0 138.6-240H480Z"></path>
    </svg>
  );
}

export default Confetti;
