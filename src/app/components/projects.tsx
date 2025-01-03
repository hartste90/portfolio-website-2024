import React, { useEffect } from "react";
import { responsiveHoverText } from "./responsive-hover-text";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//images
import tailwindLogo from "@images/tools/tailwind-icon.png";
import appDiscovery from "@images/projects/app-discovery.jpeg";
import ticketTracker from "@images/projects/ticket-tracker.jpeg";
import dashboard from "@images/projects/dashboard.jpeg";
import lionkit from "@images/projects/lionkit-diagram.jpeg";
// import horsepower from '@images/projects/horsepower.mp4';
import horsepower from "file-loader?modules!@images/projects/horsepower.mp4";
import animationEventFinder from "@images/projects/animation-event-finder.png";
import sproutSplashImage from "@images/projects/sprout-splash-image.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  // Define the props for your component here
}

const projectData = [
  {
    image: dashboard,
    title: "Internal KPI Dashboards",
    company: "Applovin",
    description:
      "KPI dashboards displaying key performance indicators in interactive charts and graphs.  Drawn from our aggregated internal database droplets, allowing for quick, organized review, analysis, and filtering for product manager and business development teams.",
    technologies: "React, Tailwind, DigitalOcean (DB), AWS, Jenkins",
  },
  {
    image: lionkit,
    title: "Developerkit SDK",
    company: "Applovin",
    description:
      "An SDK that allows developers to easily integrate Applovin's ad network, analytics, and IAP frameworks into their mobile apps.  The SDK is designed to be lightweight and easy to use, with a focus on performance, ease of integration, and automating compliance.",
    technologies: "React, CSS3, C#, Objective-C, AWS, Jenkins",
  },
  {
    video: horsepower,
    title: "Horsepower",
    company: "Ioconic Ltd.",
    description:
      "A multiplatform application providing users with interfaces to buy, trade, train, and race digital horse racing assets.  The app focuses on modern UX principles and performance to deliver the best-in-class experinece for blockchain traders and horse racing enthusiasts.",
    technologies: "React, HTML, CSS, C#, Unity, UXML, Docker, MongoDB, AWS",
  },
  {
    image: ticketTracker,
    title: "Ticket Master SF",
    company: "Rapidfire Studios",
    description:
      "A web application that connects users to buy, sell, and trade event tickets in the San Francisco Bay Area.  The app features a variety of event categories, and a user-friendly mobile interface for quick and easy ticket management.",
    technologies: "React, Tailwind, NodeJS, AWS, GitLab",
  },
  {
    image: animationEventFinder,
    title: "Animation Event Finder",
    company: "Rapidfire Studios",
    description:
      "Increases the observability between interactive animations and scripting inside the Unity Engine.  Includes the ability to search for scripts called during animations and view information about them from a debug modal without having to drill into the animation framework.",
    technologies: "C#, CSS, Unity",
  },
  {
    image: sproutSplashImage,
    title: "Sprout - Idle Garden",
    company: "Applovin",
    description:
      "A hugely popular mobile game where players grow and manage their own garden.  The game features a variety of plants, decorations, and events to keep players engaged from day-0 to day-100.  I was the lead engineer on the app's core architecture, UI, gameplay, and monetization features.",
    technologies: "C#, Unity",
  },
  {
    image: appDiscovery,
    title: "App Discovery",
    company: "Applovin",
    description:
      "A web portal that provides developers and business development teams insights and analytics on the performance of our app recommendation algorthim and performance.",
    technologies: "React, Tailwind, NodeJS, AWS, GitLab",
  },
];

interface ProjectsProps {
  className?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<ProjectsProps> = (props) => {
  useEffect(() => {
    gsap.fromTo(
      ".project-panel",
      {
        opacity: 0,
        x: -200,
        ease: "none",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.25,
        scrollTrigger: {
          trigger: ".project-panel",
          start: "top bottom-=25%",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className={`relative flex items-center justify-center ${props.className}`}
    >
      <div className="text-right my-auto select-none max-w-screen-xl">
        <h1 className="mt-[4rem] title-clip hero-main-text text-shadow-dark font-bold tracking-tight text-vaporwave-900 mb-10 bg-white py-4 px-6 border-2 border-black">
          {responsiveHoverText("A few of my projects.")}
        </h1>
        <div className="project-panel flex flex-row flex-wrap justify-center basis-1/2 opacity-100">
          {projectPanel}
        </div>
      </div>
    </section>
  );
};

const projectPanel: JSX.Element[] = projectData.map((project, index) => {
  let hasBottomBorder = false; // index !== projectData.length - 1;
  return (
    <div
      key={project.title}
      className={`my-10 sm:mx-10  ${
        hasBottomBorder
          ? "border-b-4 border-slate-600"
          : "" + (index % 2 === 0 ? "sm:translate-x-8" : "sm:-translatex-8")
      } sm:flex flex-row content-center items-center bg-white shadow-lg px-10 py-20`}
    >
      {/* //desktop */}
      {project.image !== undefined && (
        <img
          src={
            typeof (project as any).image === "string"
              ? (project as any).image
              : (project as any).image.src.toString()
          }
          draggable={false}
          alt={project.description}
          className="hidden sm:flex lift-on-hover shadow-lg max-h-80 max-w-[50%] object-cover content-center"
        />
      )}
      {project.video !== undefined && (
        <video
          controls={false}
          autoPlay={true}
          loop
          muted
          src={"/horsepower.mp4"}
          className="hidden sm:flex lift-on-hover shadow-lg object-cover max-w-[50%]"
        />
      )}
      {/* //mobile */}
      {project.image !== undefined && (
        <img
          src={
            typeof (project as any).image === "string"
              ? (project as any).image
              : (project as any).image.src.toString()
          }
          draggable={false}
          alt={project.description}
          className="sm:hidden inline-block shadow-lg content-center p-3"
        />
      )}
      {project.video !== undefined && (
        <video
          controls={false}
          autoPlay={true}
          loop
          muted
          src={"/horsepower.mp4"}
          className="sm:hidden shadow-lg p-3"
        />
      )}

      {/* //desktop */}
      <div className="hidden sm:flex p-1 px-4 w-1/2 text-left">
        <Card className="border-none shadow-none h-full bg-white">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter className="text-slate-400">
            <h4>{project.technologies}</h4>
          </CardFooter>
        </Card>
        {/* <p className='text-xl text-center text-slate-700'>{project.title}</p> */}
      </div>
      {/* //mobile */}
      <div className="sm:hidden w-full text-left">
        <Card className="border-none shadow-none h-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter className="text-slate-400">
            <h4>{project.technologies}</h4>
          </CardFooter>
        </Card>
        {/* <p className='text-xl text-center text-slate-700'>{project.title}</p> */}
      </div>
    </div>
  );
});

export default Projects;
