// components/InteractiveCSSAbilitiesDemo.tsx

"use client"


import React, { useEffect, useRef } from 'react';

const InteractiveCSSAbilitiesDemo: React.FC = () => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (preRef.current) {
        const x = event.clientX;
        const y = event.clientY;

        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;

        preRef.current.style.setProperty('--rotateX', `${-1 * offsetY}deg`);
        preRef.current.style.setProperty('--rotateY', `${offsetX}deg`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 bg-blend-multiply">
      <pre
        ref={preRef}
        className="language-css bg-gray-900 p-8 rounded-lg text-white font-bold text-3xl transform-style-3d perspective-5000"
        style={{
          '--rotateY': '0deg',
          '--rotateX': '0deg',
          '--selector': 'hsl(338, 70%, 55%)',
          '--property': 'hsl(183, 70%, 62%)',
          '--punctuation': 'hsl(334, 7%, 95%)',
        } as React.CSSProperties}
      >
        <code className="language-css">
          <span className="text-pink-500">.claude</span>{' '}
          <span className="text-white">{'{'}</span>
          <br />
          {'  '}
          <span className="text-teal-400">abilities</span>
          <span className="text-white">:</span> css
          <span className="text-white">;</span>
          <br />
          <span className="text-white">{'}'}</span>
        </code>
      </pre>
    </div>
  );
};

export default InteractiveCSSAbilitiesDemo;