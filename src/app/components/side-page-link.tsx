import { SheetDescription } from '@/components/ui/sheet';
import { Github } from 'lucide-react';
import React, { ReactElement, ReactNode } from 'react';
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
    return (
        <>
            <SheetDescription className="p-3 my-2 text-indigo-600 text-md hover:bg-indigo-600 hover:text-white">
                <div className='flex'>
                    {icon}
                  <a target='_blank' className="mx-4"href={url}>{title}</a>               
                </div>
            </SheetDescription>
        </>
    );
};

export default SidePageLink;