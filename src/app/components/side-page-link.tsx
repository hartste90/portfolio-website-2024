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
                <Button onClick={() => {
                        window.open(url, '_blank')
                    }}
                    onMouseEnter={(e) => {btnHoverSet(true)}}
                    onMouseLeave={(e) => {btnHoverSet(false)}}   
                    variant="outline" 
                    className={`button-hover font-semibold leading-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:text-white rounded-full p-4 px-8 transition-all duration-300 w-9/12`}
                    >
                        <span className='flex justify-evenly mr-5'> {icon} </span>
                        <span className='flex justify-evenly'> {title} </span>
                    </Button>
            </SheetDescription>
        </>
    );
};

export default SidePageLink;