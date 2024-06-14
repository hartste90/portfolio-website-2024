import React, { useEffect } from 'react';
import { responsiveHoverText } from './responsive-hover-text';
import ScrollAnimation from 'react-animate-on-scroll';
//images
import tailwindLogo from '@images/tools/tailwind-icon.png';
import reactLogo from '@images/tools/react-icon.png';
import androidStudioLogo from '@images/tools/android-studio-icon.png';
import firebaseLogo from '@images/tools/firebase-icon.png';
import awsLogo from '@images/tools/aws-icon.png';
import cssLogo from '@images/tools/css3-icon.png';
import dockerLogo from '@images/tools/docker-icon.png';
import githubLogo from '@images/tools/github-icon.png';
import html5Logo from '@images/tools/html5-icon.png';
import javascriptLogo from '@images/tools/javascript-icon.png';
import jenkinsLogo from '@images/tools/jenkins-icon.png';
import mongodbLogo from '@images/tools/mongodb-icon.png';
import nodejsLogo from '@images/tools/nodejs-icon.png';
import perforceLogo from '@images/tools/perforce-icon.png';
import pythonLogo from '@images/tools/python-icon.png';
import typescriptLogo from '@images/tools/typescript-icon.png';
import unityLogo from '@images/tools/unity-icon.png';
import xcodeLogo from '@images/tools/xcode-icon.png';

interface Props {
    // Define the props for your component here
}

const toolData = 
[
    {image: reactLogo, text: "React"},
    {image: tailwindLogo, text: "Tailwind CSS"},
    {image: typescriptLogo, text: "TypeScript"},
    {image: html5Logo, text: "HTML5"},
    {image: cssLogo, text: "CSS"},
    {image: javascriptLogo, text: "JavaScript"},
    {image: firebaseLogo, text: "Google Firebase"},
    {image: awsLogo, text: "AWS"},
    {image: dockerLogo, text: "Docker"},
    {image: jenkinsLogo, text: "Jenkins"},
    {image: githubLogo, text: "GitHub"},
    {image: perforceLogo, text: "Perforce"},
    {image: mongodbLogo, text: "MongoDB"},
    {image: nodejsLogo, text: "Node.js"},
    {image: pythonLogo, text: "Python"},
    {image: unityLogo, text: "Unity Engine"},
    {image: androidStudioLogo, text: "Android Studio"},
    {image: xcodeLogo, text: "Xcode"}
];



const Tools: React.FC<Props> = () => {
    // Implement your component logic here
    return (
        <section className="section-left relative flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-pink-100 to-indigo-100 py-24"> 
            <div className="text-left my-auto select-none">
            <h1 className="mt-[4rem] ml-24 hero-main-text text-6xl font-bold tracking-tight text-gray-900 mb-10">
                    {responsiveHoverText("Some of the tools I like to use.")}
                </h1>
                <div className='flex flex-row flex-wrap justify-center basis-1/2'>
                    {toolPanel()}
                </div>
                   
            </div>
         </section>
    );
};

const toolPanel = function() {
    const rowLength = 20;
    let rows: React.JSX.Element[] = [];
    let row: React.JSX.Element[] = [];
    let rowNum = 1;
    toolData.forEach((tool, index) => {
        const toolElement = (
            <ScrollAnimation animateIn="fadeInLeft" initiallyVisible={false} animateOnce={true} delay={50 * index} animatePreScroll={true}>
                <div className={` m-10 lift-on-hover  border-b-4 border-slate-600`}> 
                    <img src={typeof tool.image === 'string' ? tool.image : tool.image.src.toString()} draggable={false} alt={tool.text} 
                        className="w-24 h-24 content-center mx-auto mb-5"/>
                    <div className=' p-1 px-4'>
                        <p className='text-xl text-center text-slate-700'>{tool.text}</p>
                    </div>
                </div>
            </ScrollAnimation>
        );

        if(row.length < rowLength) {
            row.push(toolElement);
        }
        else {
            rows.push(
                <div className="flex m-1 flex-row flex-wrap justify-center">
                    {row}
                </div>
            );
            rowNum++;
            row = [];
            row.push(toolElement);
        }
    });
    if(row.length > 0){
        rows.push(
            <div className="flex m-1 flex-row flex-wrap justify-center">
                {row}
            </div>
        );
    }
    
    return (
        <div className='block'>
            {rows}
        </div>
    );
};


export default Tools;