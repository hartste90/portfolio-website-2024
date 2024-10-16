import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { File, Github, Linkedin } from "lucide-react";
import SidePageLink from "./side-page-link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
interface ContactMeSheetProps {
  className?: string;
  // Define the props for your component here
}

const ContactMeSheet: React.FC<ContactMeSheetProps> = (props) => {
  // Implement your component logic here

  const { toast } = useToast();

  return (
    <div className="z-10 ">
      <Sheet>
        <SheetTrigger
          className={`fixed top-4 right-6 button-hover font-semibold leading-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full p-4 px-8 transition-all duration-300`}
        >
          Get in touch
        </SheetTrigger>
        <SheetContent className="bg-black">
          <SheetHeader className=" mt-5">
            <SheetTitle
              // className='text-xl text-indigo-600 my-4 pb-4 justify-center content-center'>
              className={`text-md font-semibold bg-gradient-to-r inline-block text-transparent bg-clip-text from-pink-500 to-indigo-500`}
            >
              Contact me.
            </SheetTitle>
            <Button
              onClick={() => {
                toast({
                  description: "Email copied to clipboard!",
                });
                navigator.clipboard.writeText("steven.hart282@gmail.com");
              }}
              variant="outline"
              className={`button-hover font-semibold leading-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:text-white rounded-full p-4 px-8 transition-all duration-300`}
            >
              <span>steven.hart282@gmail.com</span>
            </Button>
          </SheetHeader>
          <SheetHeader>
            <SheetTitle
              className={`pt-10 text-md font-semibold bg-gradient-to-r inline-block text-transparent bg-clip-text from-pink-500 to-indigo-500`}
            >
              {/* className='pt-10 text-xl text-indigo-600 my-4 pb-4 justify-center content-center'> */}
              ..or look at my other resources
            </SheetTitle>
            <SidePageLink
              icon={<Github className="inline" />}
              title="Github"
              url="https://github.com/hartste90"
            />
            <SidePageLink
              icon={<Linkedin className="inline" />}
              title="LinkedIn"
              url="https://www.linkedin.com/in/steven-hart-65458026/"
            />
            <SidePageLink
              icon={<File className="inline" />}
              title="Resume"
              url="https://github.com/hartste90/portfolio-website-2024/blob/main/documents/StevenHart-Resume.pdf"
            />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ContactMeSheet;
