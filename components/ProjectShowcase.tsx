"use client"


import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: "HakiAI.com - AI-Powered Blog Platform",
            description: "Automated content generation platform using Next.js, Appwrite, n8n, and browserless for AI-driven blog posts",
            image: "assets/hakiai.jpeg",
            code: `
.hakiai-platform {
  framework: Next.js;
  backend: Appwrite;
  automation: n8n;
  headless: browserless;
  styling: Tailwind CSS;
  features: [
    "AI Content Generation",
    "Automated Posting",
    "SEO Optimization"
  ]
}`
        },
        {
            title: "IETP School Management System",
            description: "Comprehensive local school management solution built with React.js and SQL",
            image: "assets/ietp.png",
            code: `
.ietp-system {
  framework: React.js;
  database: MySQL;
  tool: MySQL Workbench;
  styling: SCSS;
  features: [
    "Student Management",
    "Grade Tracking",
    "Attendance System"
  ]
}`
        },
        {
            title: "KasbahDades.com",
            description: "Elegant hotel presentation website showcasing Moroccan hospitality",
            image: "assets/kasbahdades.com.jpeg",
            code: `
.kasbah-website {
  framework: Next.js;
  backend: Firebase;
  styling: Tailwind CSS;
  features: [
    "Room Booking",
    "Virtual Tours",
    "Real-time Availability"
  ]
}`
        },
        {
            title: "AI Art Generator",
            description: "Popular Android art generation app with 50,000+ downloads",
            image: "assets/aiart.png",
            code: `
.ai-art-android {
  platform: Android Studio;
  language: Java;
  ui: XML;
  downloads: "50,000+";
  features: [
    "Multiple Art Styles",
    "Image Processing",
    "Gallery Management"
  ]
}`
        },
        {
            title: "SaaS AI Art Generator",
            description: "Professional AI art generation platform with subscription model",
            image: "assets/hakiaiartgenerator.jpeg",
            code: `
.saas-art-platform {
  framework: Next.js;
  database: Supabase;
  payment: Gumroad;
  styling: Tailwind CSS;
  features: [
    "Premium Art Styles",
    "Subscription Management",
    "Art Collection"
  ]
}`
        },
        {
            title: "AI Task|Note Master",
            description: "Smart Android app for AI-powered note-taking and task management",
            image: "assets/tasknote.png",
            code: `
.ai-taskmaster {
  platform: Android Studio;
  languages: [Java, Kotlin];
  features: [
    "AI Task|Note Suggestions",
    "Smart Notes",
    "Voice Commands",
    "Task Categories"
  ]
}`
        }
    ];

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

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div id='projects' className="min-h-[1000px] grid place-items-center overflow-hidden">
            <div className="relative">
                <div
                    ref={containerRef}
                    className="
                        relative w-[320px] h-[720px]
                        md:w-[520px] md:h-[520px] lg:w-[820px] lg:h-[620px]
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

                    {/* Main black card with project info */}
                    <div className="
                        absolute inset-2 bg-[#040404] p-6 rounded-xl
                        [transform:translateZ(10px)] [backface-visibility:hidden]
                        shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center
                    ">
                        <h2 className="text-2xl font-bold text-white mb-4">{projects[currentIndex].title}</h2>
                        <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>
                        <pre className="w-full bg-gray-800 p-4 rounded-md text-sm font-mono text-white">
                            <code>{projects[currentIndex].code}</code>
                        </pre>
                    </div>
                </div>

                {/* Navigation arrows */}
                <button onClick={prevProject} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextProject} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ProjectShowcase;