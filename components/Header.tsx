"use client"

import React, { useState, useEffect } from 'react';
import ShinyButton from './magicui/shiny-button';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import TypingAnimation from './magicui/typing-animation';
import Menu from '@/components/Menu';
import BlurIn from './magicui/blur-in';
import Form from './Form';
import { Button } from './ui/button';

const Header: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={`fixed w-full h-16 flex items-center justify-between p-5 z-[99] bg-white dark:bg-black transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <BlurIn
                word="NABIL TANTSSIFT"
                className="text-xl md:text-2xl lg:text-2xl"
            />

            <div className="hidden items-center justify-center md:flex lg:flex">
                <ul className='flex flex-row items-center justify-center gap-5'>
        
                    <li>
                        <Link href="/#skills" className='hover:opacity-100 opacity-80'>
                            <TypingAnimation
                                className="text-1xl  text-black dark:text-white"
                                text="SKILLS"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects" className='hover:opacity-100 opacity-80'>
                            <TypingAnimation
                                className="text-1xl  text-black dark:text-white"
                                text="PROJECTS"
                            />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hidden gap-5 flex-col md:flex-row lg:flex-row md:flex lg:flex">
                <ModeToggle />
                <Form >
                    <Button className='bg-transparent hover:bg-transparent'>
                        <ShinyButton text="Contact Us" />
                    </Button>
                </Form>
            </div>

            <Menu />
        </header>
    );
};

export default Header;