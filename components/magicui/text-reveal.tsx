"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: React.FC<TextRevealByWordProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: "300vh" }}>
      <div className="sticky top-0 left-0 right-0 min-h-screen flex items-center justify-center">
        <motion.p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-4 text-center">
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} index={i} totalWords={words.length}>
              {word}
            </Word>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  index: number;
  totalWords: number;
}

const Word: React.FC<WordProps> = ({ children, progress, index, totalWords }) => {
  const start = index / totalWords;
  const end = start + 1 / totalWords;
  
  const opacity = useTransform(
    progress,
    [start, end],
    [0.2, 1]
  );

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mx-1 text-black dark:text-white"
    >
      {children}{" "}
    </motion.span>
  );
};

export default TextRevealByWord;