import { JSX, useState } from "react";
import { Dialog } from "@headlessui/react";
import "animate.css/animate.compat.css";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Writepad from "./writepad";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import logo from "@/../img/portraits/steve-profile-circle.png";
import "../globals.css";

import ScrollAnimation from "react-animate-on-scroll";
import Section from "@/app/components/section";
import { responsiveHoverText } from "./responsive-hover-text";
import ContactMeSheet from "./contact-me-sheet";
import { ScrollingBackground } from "./scrolling-background/scrolling-background";

// const navigation = [
//   { name: 'Services', href: '#' },
//   { name: 'Reviews', href: '#' },
//   { name: 'Tips & Advice', href: '#' },
// ]

export default function Hero() {
  return (
    <div className="bg-white">
      <ScrollingBackground
        setMilestone={() => {
          console.log("hit milestone");
        }}
      />
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="flex items-start lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Steve Hart</span>
            </a>
          </div>

          {/* Navigation Menu */}
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
          <div className="lg:flex lg:flex-1 lg:justify-end ">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-indigo-500 border-solid border-2 rounded-xl border-indigo-500 p-2 transition hover:text-white hover:bg-indigo-500">
              Book Now <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 h-full lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-clip sm:-top-80"
          aria-hidden="true"
        >
          {/* <div className="rotate animate-spin-slow blur-xl">
            <div
              // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1 blur-3xl"
              className=" aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1"
            />
          </div>
          <div className="rotate animate-spin-slow blur-xl">
            <div
              // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1 blur-3xl"
              className=" aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1"
            />
          </div> */}
        </div>
        <div className="mx-auto max-w-2xl pt-32 md:pt-28 fade">
          <img
            className="w-auto h-60 mx-auto rounded-full p-1.5"
            src={logo.src}
            alt=""
          />
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full text-center px-3 py-1 text-xs leading-6 text-cyan-100 ring-1 ring-cyan-900/50 hover:ring-cyan-900/70 my-8">
              Hi I'm Steve. A modern full-stack developer.{" "}
              {/* <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a> */}
            </div>
          </div>
          <div className="text-center mb-10">
            <h1 className="hero-main-text text-shadow-dark font-bold tracking-tight text-cyan-100 -z-100">
              {responsiveHoverText(
                "I use code to create moments of impact and delight."
              )}
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Click and drag on the paper below&nbsp;to help me <span className="p-1 italic bg-indigo-200 highlight">
                write my story...
                    </span> 
                </p> */}
          </div>
        </div>

        {/* <div className="notepad mx-20">
          <div className="top"></div>
          <div id="canvasParent" className="paper mb-40">
            <Writepad className="absolute z-10"/>
          </div>
        </div> */}
      </div>
    </div>
  );
}
