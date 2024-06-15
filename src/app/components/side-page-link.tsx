import { SheetDescription } from '@/components/ui/sheet';
import { Github } from 'lucide-react';
import React, { ReactElement, ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';


interface SidePageLinkProps {
    title: string;
    url: string;
    icon: ReactElement;
}

const SidePageLink: React.FC<SidePageLinkProps> = ({
    title,
    url,
    icon,
}) => {
    const [btnHover, btnHoverSet] = useState(false);
    return (
        <>
            <SheetDescription>
    {/* //             className={`mt-[100px] text-md font-semibold bg-gradient-to-r inline-block text-white bg-clip-border from-pink-500 to-indigo-500 hover:bg-clip-text hover:text-transparent transition-all p-2 rounded-sm hover:border-slate-200 hover:border `}> */}
 {/* className="p-3 my-2 text-indigo-600 text-md hover:bg-indigo-600 hover:text-white transition duration-300"> */}
    {/* //             <div className='flex hover:text-black'>
    //                 {icon}
    //               <a target='_blank' className="mx-4"href={url}>{title}</a>               
    //             </div> */}

                <Button onClick={() => {
                        window.open(url, '_blank')
                    }}
                    onMouseEnter={(e) => {btnHoverSet(true)}}
                    onMouseLeave={(e) => {btnHoverSet(false)}}   
                    variant="outline" 
                    className={`text-md font-semibold bg-gradient-to-r inline-block text-white bg-clip-border from-pink-500 to-indigo-500 hover:bg-clip-text hover:text-transparent hover:text-black transition-all w-1/2`}>
                      <span className='flex justify-evenly'>{icon} {title} </span>
                    </Button>
            </SheetDescription>
        </>
    );
};

export default SidePageLink;