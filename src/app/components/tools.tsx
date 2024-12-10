import React, { useEffect } from "react";
import { responsiveHoverText } from "./responsive-hover-text";
// import ScrollAnimation from "react-animate-on-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//images
import tailwindLogo from "@images/tools/tailwind-icon.png";
import reactLogo from "@images/tools/react-icon.png";
import androidStudioLogo from "@images/tools/android-studio-icon.png";
import firebaseLogo from "@images/tools/firebase-icon.png";
import awsLogo from "@images/tools/aws-icon.png";
import cssLogo from "@images/tools/css3-icon.png";
import dockerLogo from "@images/tools/docker-icon.png";
import githubLogo from "@images/tools/github-icon.png";
import html5Logo from "@images/tools/html5-icon.png";
import javascriptLogo from "@images/tools/javascript-icon.png";
import jenkinsLogo from "@images/tools/jenkins-icon.png";
import mongodbLogo from "@images/tools/mongodb-icon.png";
import nodejsLogo from "@images/tools/nodejs-icon.png";
import perforceLogo from "@images/tools/perforce-icon.png";
import pythonLogo from "@images/tools/python-icon.png";
import typescriptLogo from "@images/tools/typescript-icon.png";
import unityLogo from "@images/tools/unity-icon.png";
import xcodeLogo from "@images/tools/xcode-icon.png";

interface Props {
  // Define the props for your component here
}

const toolData = [
  { image: reactLogo, text: "React" },
  { image: tailwindLogo, text: "Tailwind CSS" },
  { image: typescriptLogo, text: "TypeScript" },
  { image: html5Logo, text: "HTML5" },
  { image: cssLogo, text: "CSS" },
  { image: javascriptLogo, text: "JavaScript" },
  { image: firebaseLogo, text: "Google Firebase" },
  { image: awsLogo, text: "AWS" },
  { image: dockerLogo, text: "Docker" },
  { image: jenkinsLogo, text: "Jenkins" },
  { image: githubLogo, text: "GitHub" },
  { image: perforceLogo, text: "Perforce" },
  { image: mongodbLogo, text: "MongoDB" },
  { image: nodejsLogo, text: "Node.js" },
  { image: pythonLogo, text: "Python" },
  { image: unityLogo, text: "Unity Engine" },
  { image: androidStudioLogo, text: "Android Studio" },
  { image: xcodeLogo, text: "Xcode" },
];

interface ToolsProps {
  className?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Tools: React.FC<ToolsProps> = (props) => {
  useEffect(() => {
    gsap.utils.toArray(".tool").forEach((tool, index) => {
      let target = tool as gsap.TweenTarget;
      gsap.set(target, { x: 0, opacity: 1 });
      gsap.from(target, {
        scrollTrigger: {
          trigger: target as gsap.DOMTarget,
          start: "top bottom",
          end: "top center",
          // scrub: true,
          // markers: true,
        },
        delay: index * 0.1,
        opacity: 0,
        x: -50,
        ease: "none",
        duration: 0.25,
      });
    }, []);
  }, []);

  return (
    <section
      data-scroll-section
      data-scroll
      data-scroll-speed="0.5"
      className={`tool-animation-trigger section-left relative flex items-center justify-center min-h-screen px-4 bg-black bg-opacity-0  from-vaporwave-50 to-vaporwave-300/95 py-24 ${props.className}`}
    >
      <div className="text-left my-auto select-none max-w-screen-xl">
        <h1 className="mt-[4rem] sm:ml-24 hero-main-text text-shadow-dark font-bold tracking-tight text-cyan-100 mb-10 bg-black bg-opacity-70 py-4 px-20 title-clip">
          {responsiveHoverText("Some of the tools I like to use.")}
        </h1>
        <div className="flex flex-row flex-wrap justify-center basis-1/2 mx-20">
          {toolPanel()}
        </div>
      </div>
    </section>
  );
};

const toolPanel = function () {
  let tools: React.JSX.Element[] = [];
  toolData.forEach((tool, index) => {
    const toolElement = (
      <div key={`${tool}+${index}`}>
        <div
          className={`tool m-3 lift-on-hover opacity-20 border-b-4 border-slate-600`}
        >
          <img
            src={
              typeof tool.image === "string"
                ? tool.image
                : tool.image.src.toString()
            }
            draggable={false}
            alt={tool.text}
            className="w-20 h-20 content-center mx-auto mb-5"
          />
          <div className=" p-1 px-4">
            <p className="text-xl text-center text-white">{tool.text}</p>
          </div>
        </div>
      </div>
    );
    tools.push(toolElement);
  });

  return (
    <div
      key="lastRow"
      className="tool-row flex m-1 flex-row flex-wrap justify-center"
    >
      {tools}
    </div>
  );
};

export default Tools;
