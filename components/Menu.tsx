import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import TypingAnimation from './magicui/typing-animation'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import ShinyButton from './magicui/shiny-button'
import WavyText from './magicui/wavy-text'
import Form from './Form'


const Menu = () => {
    return (
        <div className="flex sm:hidden md:hidden ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='w-[40px] h-[40px] flex items-center justify-center' variant="outline">
                        <div className="flex justify-center gap-[5px] items-center flex-col">
                            <div className="w-[25px] rounded-sm h-[2px] bg-black dark:bg-white"></div>
                            <div className="w-[30px] rounded-sm h-[2px] bg-black dark:bg-white"></div>
                            <div className="w-[25px] rounded-sm h-[2px] bg-black dark:bg-white"></div>
                        </div>
                    </Button>
                </SheetTrigger>
                <SheetContent className='z-[100] flex flex-col items-center justify-between bg-white dark:bg-black'>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            Building bridges between front-end dreams and back-end realities.
                        </SheetDescription>
                    </SheetHeader>


                    <div className="flex gap-5 p-5 flex-col w-full h- items-center justify-between">




                        <ul className='flex flex-col items-center justify-center gap-5'>
                            
                            <li>
                                <Link href="/#skills" className='hover:opacity-100 opacity-80'>
                                    <WavyText
                                        className="text-1xl  text-black dark:text-white"
                                        word="SKILLS"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className='hover:opacity-100 opacity-80'>
                                    <WavyText
                                        className="text-1xl  text-black dark:text-white"
                                        word="PROJECTS"
                                    />
                                </Link>
                            </li>


                        </ul>




                    </div>

                    <div className="flex gap-5 flex-row w-full items-center justify-center">
                        <ModeToggle />
                        <Form >
                            <Button className='bg-transparent hover:bg-transparent'>
                                <ShinyButton text="Contact Us" />
                            </Button>
                        </Form>
                    </div>

                </SheetContent>
            </Sheet>
        </div>

    )
}

export default Menu