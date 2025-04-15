"use client"

import React, { useEffect, useRef } from 'react';

const CSSAbilitiesDemo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rotateElement = (event: MouseEvent) => {
            if (!containerRef.current) return;

            const x = event.clientX;
            const y = event.clientY;
            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;
            const offsetX = ((x - middleX) / middleX) * 25;
            const offsetY = ((y - middleY) / middleY) * 25;

            containerRef.current.style.setProperty('--rotateX', `${-1 * offsetY}deg`);
            containerRef.current.style.setProperty('--rotateY', `${offsetX}deg`);
        };

        document.addEventListener('mousemove', rotateElement);

        return () => {
            document.removeEventListener('mousemove', rotateElement);
        };
    }, []);

    return (
        <div className="min-h-screen grid place-items-center overflow-hidden">
            <div
                ref={containerRef}
                className="
          relative w-[320px] h-[220px]
          md:w-[520px] md:h-[320px] lg:w-1/2 lg:h-1/2
          transition-transform duration-100 ease-out
          [transform-style:preserve-3d]
          [transform:perspective(1000px)_rotateX(var(--rotateX,0deg))_rotateY(var(--rotateY,0deg))]
          hover:[transform:perspective(1000px)_rotateX(var(--rotateX,0deg))_rotateY(var(--rotateY,0deg))_scale3d(1.05,1.05,1.05)]
        "
            >
                {/* Background colorful card */}
                <div className="
          absolute inset-0 bg-gradient-to-br from-purple-600 via-red-500 to-yellow-500
          rounded-xl shadow-2xl [transform:translateZ(-10px)] [backface-visibility:hidden]
        "></div>

                {/* Main black card with code */}
                <pre className="
          absolute inset-2 text-3xl font-bold bg-[#040404] p-6 rounded-xl
          [transform:translateZ(10px)] [backface-visibility:hidden]
          shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center
        ">
                    <code className="block p-4 rounded-md text-sm font-mono">
                        <span className="text-[#ff4d8e]">.developer</span> {'{'}
                        <br />
                        &nbsp;&nbsp;<span className="text-[#5ae9ff]">proficiency</span>: <span className="text-white">advanced</span>;
                        <br />
                        &nbsp;&nbsp;<span className="text-[#5ae9ff]">tools</span>: <span className="text-white">Next JS, More</span>;
                        <br />
                        &nbsp;&nbsp;<span className="text-[#5ae9ff]">experience</span>: <span className="text-white">5 years</span>;
                        <br />
                        {'}'}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CSSAbilitiesDemo;