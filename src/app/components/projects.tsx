import React, { useEffect } from 'react';
import { responsiveHoverText } from './responsive-hover-text';
import ScrollAnimation from 'react-animate-on-scroll';
//images
import tailwindLogo from '@images/tools/tailwind-icon.png';
import appDiscovery from '@images/projects/app-discovery.jpeg';
import dashboard from '@images/projects/dashboard.jpeg';
import lionkit from '@images/projects/lionkit-diagram.jpeg';
// import horsepower from '@images/projects/horsepower.mp4';
import horsepower from 'file-loader?modules!@images/projects/horsepower.mp4';
import animationEventFinder from '@images/projects/animation-event-finder.png';
import sproutSplashImage from '@images/projects/sprout-splash-image.png';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    // Define the props for your component here
}

const projectData = 
[
    
    
    
    {
        image: dashboard, 
        title: "Internal KPI Dashboards", 
        company: "Applovin", 
        description: "KPI dashboards displaying key performance indicators in interactive charts and graphs.  Drawn from our aggregated internal database droplets, allowing for quick, organized review, analysis, and filtering for product manager and business development teams.",
        technologies: "React, Tailwind, DigitalOcean (DB), AWS, Jenkins"
    },
    {
        image: lionkit, 
        title: "Developerkit SDK", 
        company: "Applovin", 
        description: "An SDK that allows developers to easily integrate Applovin's ad network, analytics, and IAP frameworks into their mobile apps.  The SDK is designed to be lightweight and easy to use, with a focus on performance, ease of integration, and automating compliance.",
        technologies: "React, CSS3, C#, Objective-C, AWS, Jenkins"
    },
    {
        video: horsepower, 
        title: "Horsepower", 
        company: "Ioconic Ltd.", 
        description: "A multiplatform application providing users with interfaces to buy, trade, train, and race digital horse racing assets.  The app focuses on modern UX principles and performance to deliver the best-in-class experinece for blockchain traders and horse racing enthusiasts.",
        technologies: "React, HTML, CSS, C#, Unity, UXML, Docker, MongoDB, AWS"
    },
    {
        image: animationEventFinder,
        title: "Animation Event Finder",
        company: "Open Source",
        description: "A public project I began to increase the observability between interactive animations and scripting.  Includes the ability to search for scripts called during animations and view information about them from a debug modal without having to drill into the animation framework.",
        technologies: "C#, CSS, Unity"
    },
    {
        image: sproutSplashImage,
        title: "Sprout - Idle Garden",
        company: "Applovin",
        description: "A hugely popular mobile game where players grow and manage their own garden.  The game features a variety of plants, decorations, and events to keep players engaged from day-0 to day-100.  I was the lead engineer on the app's core architecture, UI, gameplay, and monetization features.",
        technologies: "C#, Unity"
    },
    {
        image: appDiscovery, 
        title: "App Discovery", 
        company: "Applovin", 
        description: "A web portal that provides developers and business development teams insights and analytics on the performance of our app recommendation algorthim and performance.",
        technologies: "React, Tailwind, NodeJS, AWS, GitLab"
    },
    

];



const Projects: React.FC<Props> = () => {
    // Implement your component logic here
    console.log(horsepower);
    return (
        <section className=" relative flex items-center justify-center min-h-screen px-4 "> 
            <div className="text-right my-auto select-none">
            <h1 className="mt-[4rem] hero-main-text text-6xl font-bold tracking-tight text-gray-900 mb-10">
                    {responsiveHoverText("A few of my projects.")}
                </h1>
                <div className='flex flex-row flex-wrap justify-center basis-1/2'>
                    {projectPanel}
                </div>
                   
            </div>
         </section>
    );
};

const projectPanel : JSX.Element[] = projectData.map((project, index) => {
    return (
        // <ScrollAnimation animateIn="fadeInLeft" initiallyVisible={false} animateOnce={true} delay={50 * index} animatePreScroll={true}>
            <div key={project.title} className={`my-10 mx-48 ${index !== projectData.length-1 ? "border-b-4 border-slate-600" : "" } flex flex-row pb-5 content-start items-start`}> 
                    {project.image !== undefined && <img src={typeof (project as any).image === 'string' ? (project as any).image : (project as any).image.src.toString()} draggable={false} alt={project.description} 
                        className="lift-on-hover shadow-lg max-h-80 object-cover content-center"/>}
                    {project.video!== undefined && <video controls={false} autoPlay={true} loop muted src={"/horsepower.mp4"} 
                        className="lift-on-hover shadow-lg object-cover max-w-[50%]"/>}
                    
                <div className='p-1 px-4 w-1/2 text-left'>
                    <Card className='border-none shadow-none h-full'>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                        <CardFooter className='text-slate-400'>
                            <h4>{project.technologies}</h4>
                        </CardFooter>
                    </Card>
                    {/* <p className='text-xl text-center text-slate-700'>{project.title}</p> */}
                </div>
            </div>
        // </ScrollAnimation>
    );
});


export default Projects;