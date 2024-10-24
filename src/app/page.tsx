"use client";

import Image from "next/image";

/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Hero from "./components/hero";
import { Toaster } from "@/components/ui/toaster";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Apps from "./components/apps";
import ContactMeSheet from "./components/contact-me-sheet";
import Squiggle from "./components/squiggle";
import Squiggle2 from "./components/squiggle2";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbG5AExCHzk-Md0Vs81tw26h17zolJtz8",
  authDomain: "kate-hart-dog-training-website.firebaseapp.com",
  projectId: "kate-hart-dog-training-website",
  storageBucket: "kate-hart-dog-training-website.appspot.com",
  messagingSenderId: "59156584213",
  appId: "1:59156584213:web:15b969dfcf936d5eafbb1c",
  measurementId: "G-VVVC5MHVVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  });
  return (
    <>
      <ContactMeSheet className="absolute top-5 right-5 z-20" />

      <Hero />
      <Tools className="z-6" />
      <Projects className="z-6" />
      <Apps />
      <div className="flex items-center justify-center w-full">
        <ContactMeSheet />
      </div>
      <Toaster />
      <footer className="absolute w-full flex items-center justify-center h-10 py-8">
        <div className="relative rounded-full text-center px-3 py-1 text-xs leading-6 text-cyan-100 ring-1 ring-cyan-900/50 hover:ring-cyan-900/70 my-8">
          {`this website was handcrafted by `}
          <span className="italic">Steve Hart</span>
        </div>
      </footer>
      <div className="invisible md:visible absolute top-0 left-0 w-full z-3">
        <Squiggle2 />
        <Squiggle />
      </div>
    </>
  );
}
