import React, { useEffect } from 'react';
import { responsiveHoverText } from './responsive-hover-text';
import ScrollAnimation from 'react-animate-on-scroll';
//import all images in game-icons folder
import reactLogo from '@images/game-icons/Airport-Billion-Air-Icon.webp';
import ancientBattleIcon from '@images/game-icons/Ancient-Battle-Icon.webp';
import bigBigBallerIcon from '@images/game-icons/Big-Big-Baller-Icon.webp';
import bridalRushIcon from '@images/game-icons/Bridal-Rush-Icon.webp';
import bulletBenderIcon from '@images/game-icons/Bullet-Bender-Icon.jpeg';
import choresIcon from '@images/game-icons/Chores-Icon.webp';
import clueHunterIcon from '@images/game-icons/Clue-Hunter-Icon.webp';
import colorMeHappyIcon from '@images/game-icons/Color-Me-Happy-Icon.jpeg';
import deathIncomingIcon from '@images/game-icons/Death-Incoming-Icon.webp';
import dingbatsIcon from '@images/game-icons/Dingbats-Icon.webp';
import drawDuelIcon from '@images/game-icons/Draw-Duel-Icon.webp';
import dressupRunIcon from '@images/game-icons/Dressup-Run-Icon.webp';
import elementFlowIcon from '@images/game-icons/Element-Flow-Icon.webp';
// import forgeAheadIcon from '@images/game-icons/Forge-Ahead-Icon.jpg';
import fruitClinicIcon from '@images/game-icons/Fruit-Clinic-Icon.webp';
import grabbyGrabIcon from '@images/game-icons/Grabby-Grab-Icon.webp';
import happyGlassIcon from '@images/game-icons/Happy-Glass-Icon.webp';
import hookedIcon from '@images/game-icons/Hooked-Icon.webp';
import hospitalIncIcon from '@images/game-icons/Hospital-Inc-Icon.webp';
// import iPeelGoodIcon from '@images/game-icons/I-Peel-Good-Icon.jpeg';
import icingOnTheDressIcon from '@images/game-icons/Icing-On-The-Dress-Icon.webp';
// import idPleaseIcon from '@images/game-icons/ID-Please-Icon.jpeg';
// import idleMakeoverIcon from '@images/game-icons/Idle-Makeover-Icon.jpeg';
// import inkIncIcon from '@images/game-icons/Ink-Inc-Icon.jpeg';
import lifeSimulatorIcon from '@images/game-icons/Life-Simulator-Icon.webp';
import loveBallsIcon from '@images/game-icons/Love-Balls-Icon.webp';
import magicChanceIcon from '@images/game-icons/Magic-Chance-Icon.jpeg';


interface Props {
    // Define the props for your component here
}

const appData = 
[
    {image: reactLogo, text: "Airport Billion Air"},
    {image: ancientBattleIcon, text: "Ancient Battle"},
    {image: bigBigBallerIcon, text: "Big Big Baller"},
    {image: bridalRushIcon, text: "Bridal Rush"},
    {image: bulletBenderIcon, text: "Bullet Bender"},
    {image: choresIcon, text: "Chores"},
    {image: clueHunterIcon, text: "Clue Hunter"},
    {image: colorMeHappyIcon, text: "Color Me Happy"},
    {image: deathIncomingIcon, text: "Death Incoming"},
    {image: dingbatsIcon, text: "Dingbats"},
    {image: drawDuelIcon, text: "Draw Duel"},
    {image: dressupRunIcon, text: "Dressup Run"},
    {image: elementFlowIcon, text: "Element Flow"},
    // {image: forgeAheadIcon, text: "Forge Ahead"},
    {image: fruitClinicIcon, text: "Fruit Clinic"},
    {image: grabbyGrabIcon, text: "Grabby Grab"},
    {image: happyGlassIcon, text: "Happy Glass"},
    {image: hookedIcon, text: "Hooked"},
    {image: hospitalIncIcon, text: "Hospital Inc"},
    // {image: iPeelGoodIcon, text: "I Peel Good"},
    {image: icingOnTheDressIcon, text: "Icing On The Dress"},
    // {image: idPleaseIcon, text: "ID Please"},
    // {image: idleMakeoverIcon, text: "Idle Makeover"},
    // {image: inkIncIcon, text: "Ink Inc"},
    {image: lifeSimulatorIcon, text: "Life Simulator"},
    {image: loveBallsIcon, text: "Love Balls"},
    {image: magicChanceIcon, text: "Magic Chance"}


];



const Apps: React.FC<Props> = () => {
    // Implement your component logic here
    return (
        <section className="section-left relative flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-emerald-100 to-indigo-200 py-24 pb-36"> 
            <div className="text-left my-auto select-none">
            <h1 className="mt-[4rem] ml-24 hero-main-text text-6xl font-bold tracking-tight text-gray-900 mb-10">
                    {responsiveHoverText("Some apps that use my tooling.")}
                </h1>
                <div className='flex flex-row flex-wrap justify-center basis-1/2'>
                    {toolPanel()}
                    <div className='text-xl text-gray-900'>
                        ... and many more!
                    </div>
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
    appData.forEach((tool, index) => {
        const toolElement = (
            <ScrollAnimation animateIn="fadeInLeft" initiallyVisible={false} animateOnce={true} delay={50 * index} animatePreScroll={true}>
                <div className={` m-10 lift-on-hover `}> 
                    <img src={typeof tool.image === 'string' ? tool.image : tool.image.src.toString()} draggable={false} alt={tool.text} 
                        className="w-24 h-24 content-center mx-auto mb-5 rounded-xl"/>
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


export default Apps;