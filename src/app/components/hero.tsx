import "animate.css/animate.compat.css";

import logo from "@/../img/portraits/steve-profile-circle.png";
import "../globals.css";
import { responsiveHoverText } from "./responsive-hover-text";
import { ScrollingBackground } from "./scrolling-background/scrolling-background";

export default function Hero() {
  return (
    <div className="bg-white">
      <ScrollingBackground />
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="flex items-start lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Steve Hart</span>
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end "></div>
        </nav>
      </header>

      <div className="relative isolate px-6 h-full lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-clip sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl pt-32 md:pt-28 fade">
          <img
            className="w-auto h-60 mx-auto rounded-full p-1.5"
            src={logo.src}
            alt=""
          />
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full text-center px-3 py-1 text-xs leading-6 text-cyan-100 ring-1 ring-cyan-900/50 hover:ring-cyan-900/70 my-8">
              Hi I'm Steve. A modern full-stack developer.{" "}
            </div>
          </div>
          <div className="text-center mb-10">
            <h1 className="hero-main-text text-shadow-dark font-bold tracking-tight text-cyan-100 -z-100">
              {responsiveHoverText(
                "I use code to create moments of impact and delight."
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
