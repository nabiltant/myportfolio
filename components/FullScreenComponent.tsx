import React from 'react';
import TypingAnimation from './magicui/typing-animation';
import GridPattern from './magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import WordRotate from './magicui/word-rotate';
import { Button } from './ui/button';
import Form from './Form';

const FullScreenComponent: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-start px-4 md:px-8 lg:px-20 pt-16 md:pt-0">
            <div className="flex-1 text-start w-full lg:w-1/2 py-8 lg:py-0">
                <img 
                    src="assets/profile.png" 
                    alt="Profile" 
                    className="rounded-full mb-4 w-16 h-16 md:w-20 md:h-20 object-cover object-top" 
                />
                <TypingAnimation
                    text="Hi, I'm Nabil Tantssift."
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-start" />
                <p className="text-sm md:text-base mb-2">Full Stack Software Engineer who develops user-centered products.</p>
                <p className="text-sm md:text-base mb-2">Passionate to create them with engineering and design principles.</p>
                <p className="text-sm md:text-base mb-4">Available for freelance opportunities ⚡</p>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Top Skills</h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">JavaScript</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Java</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Next.js</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">React JS</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Automation</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">CSS</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Software Design</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">UI/UX Design</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Node.js</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">NoSQL</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">SQL</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">DevOps</span>
                    <span className="bg-gray-500 px-2 py-1 rounded text-white">RESTful APIs</span>
                </div>




                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Form>
                        <Button className="w-full sm:w-auto mt-6 bg-gray-700 dark:bg-white text-white dark:text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors">
                            Say Hello
                        </Button>
                    </Form>

                    <a href="/assets/cv.pdf" download className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto mt-6 bg-gray-700 dark:bg-white text-white dark:text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors">
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>

            <div className="flex-1 relative flex h-[250px] md:h-[400px] lg:h-full w-full items-center justify-center overflow-hidden bg-background mt-16 md:mt-0">
                <WordRotate
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white"
                    words={["let's", "create", "together"]}
                />

                <GridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "opacity-30 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                        "inset-x-0 ",
                    )}
                />
            </div>
        </div>
    );
};

export default FullScreenComponent;