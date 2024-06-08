import { JSX, useState } from 'react'
import { Dialog } from '@headlessui/react'
import "animate.css/animate.compat.css"

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Writepad from './writepad'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import logo from '@/../img/portraits/steve-profile-circle.png'
import "../globals.css"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { File, Github, Linkedin } from 'lucide-react'
import SidePageLink from './side-page-link'
import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from '@/components/ui/toaster'
import ScrollAnimation from 'react-animate-on-scroll'
import Section from '@/app/components/section'

 
// const navigation = [
//   { name: 'Services', href: '#' },
//   { name: 'Reviews', href: '#' },
//   { name: 'Tips & Advice', href: '#' },
// ]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { toast } = useToast()

  function createHeroMainText()
  {
    const heroMainText = "I use code to create moments of delight and impact for users."
    let heroMainTextArray: JSX.Element[] = [];
    heroMainText.split(" ").map((word) => {
      if(word === 'delight')
      {
        heroMainTextArray.push(<a className='hero-main-char hero-main-char-special'>{word}</a>);
      }
      else{
        heroMainTextArray.push(<a className='hero-main-char'>{word}</a>);      
      }
      heroMainTextArray.push(<span>&nbsp;</span>)
    });
    return heroMainTextArray;
  }

  return (
    <div className="bg-white">.
    <Toaster/>      
    
      <header className="inset-x-0 top-0 z-50">
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Steve Hart</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
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
            <div className='z-10 '>
            <Sheet>
              <SheetTrigger
                className='text-sm font-semibold leading-6 text-indigo-500 border-solid border-2 rounded-xl border-indigo-500 p-2 hover:text-white hover:bg-indigo-500 transition duration-300'
              >Get in touch</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                <SheetTitle className='text-xl text-indigo-600 my-4 pb-4 justify-center content-center'>
                      Contact me..
                  </SheetTitle>
                  
                  <Button onClick={() => {
                    toast({
                      description: "Email copied to clipboard!",
                    });
                    navigator.clipboard.writeText("steven.hart282@gmail.com");
                  }}variant="outline" className='bg-indigo-600 text-white hover:text-indigo-600 hover:bg-indigo-100 transition duration-300'>
                    email:&nbsp;<span>steven.hart282@gmail.com</span>
                  </Button>
                  <SheetTitle className='pt-10 text-xl text-indigo-600 my-4 pb-4 justify-center content-center'>
                      ..or look at my other resources
                  </SheetTitle>
                  <SidePageLink icon={<Github/>}
                   title="Github"
                   url="https://github.com/hartste90"/>
                  <SidePageLink icon={<Linkedin/>}
                   title="LinkedIn"
                   url="https://www.linkedin.com/in/steven-hart-65458026/"/>
                   <SidePageLink icon={<File/>}
                   title="Resume"
                   url="https://github.com/hartste90/portfolio-website-2024/blob/main/documents/StevenHart-Resume.pdf"/>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            </div>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-indigo-500 border-solid border-2 rounded-xl border-indigo-500 p-2 transition hover:text-white hover:bg-indigo-500">
              Book Now <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Steven Hart</span>
                <img
                  className="h-8 w-auto"
                  src="/Users/stevehart/Documents/workspace/portfolio-website-2024/img/portraits/steve-profile.jpg"
                  alt="Steve Hart"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))*/}
                </div> 
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden  sm:-top-80"
          aria-hidden="true"
        >
          <div className='rotate animate-spin-slow blur-2xl'>
          <div
            // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1 blur-3xl"
            className=" aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1"

          />
          </div>
          <div className='rotate animate-spin-slow blur-2xl'>
          <div
            // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1 blur-3xl"
            className=" aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] blob1"

          />
          </div>
        </div>
        
        <div className="mx-auto max-w-2xl pt-28 pb-10 ">
        <img
                className="w-auto h-60 circle mx-auto rounded-full p-1.5"
                src={logo.src}
                alt=""
              />
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Hi I'm Steve.  A modern full-stack developer.{' '}
              {/* <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="hero-main-text text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {createHeroMainText()}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Click and drag on the paper below&nbsp;to help me <span className="p-1 italic bg-indigo-200 highlight">
            write my story...
                </span> 
            </p>
          </div>
        </div>

        <div className="notepad mx-10">
          <div className="top"></div>
          <div id="canvasParent" className="paper">
          <Writepad className="absolute z-10"/>
          </div>
        </div>
        
        
        <div
          className='h-8'>

        </div>
      </div>
      {/* <ScrollAnimation className="py-[300px]" animateIn="fadeInLeft" animateOnce={true} > */}
        <Section className="w-screen py-[300px] inline-flex justify-center items-center">
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} delay={100}>
        <div className='w-64 h-64 bg-blue-300 rounded-xl mx-5'>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} delay={200}>
          <div className='w-64 h-64 bg-blue-300 rounded-xl mx-5'>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} delay={300}>
          <div className='w-64 h-64 bg-blue-300 rounded-xl mx-5'>
          </div>
          </ScrollAnimation>
        </Section>
        {/* </ScrollAnimation> */}
        <ScrollAnimation className="py-[300px] bg-purple-500" animateIn="fadeInRight" animateOnce={true} >
          other text
          </ScrollAnimation>
     <div className="bg-blue-500 py-[300px]">
      
      </div>
    </div>
    
  )
}
