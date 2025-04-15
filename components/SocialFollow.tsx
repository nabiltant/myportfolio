"use client"
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const SocialFollow: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white dark:bg-black transition-colors duration-200">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">FOLLOW ME</h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <SocialIcon href="https://www.instagram.com/noble_man00?igsh=dG5qaDdsc3NlNG9o" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/nabil-tantssift/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
      </div>
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} NOBLEMAN. All rights reserved.
      </p>
    </div>
  );
};

const SocialIcon: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => (
  <a
    {...props}
    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

export default SocialFollow;