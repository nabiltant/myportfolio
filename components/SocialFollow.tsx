"use client"
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const SocialFollow: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white dark:bg-black transition-colors duration-200">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">FOLLOW ME</h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <SocialIcon href="#" aria-label="Behance">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.066 5.743c.711 0 1.305.538 1.305 1.249v10.016c0 .711-.594 1.249-1.305 1.249H6.934c-.711 0-1.305-.538-1.305-1.249V6.992c0-.711.594-1.249 1.305-1.249h10.132zM12 7.87a4.13 4.13 0 100 8.26 4.13 4.13 0 000-8.26zm0 1.333a2.797 2.797 0 110 5.594 2.797 2.797 0 010-5.594zm4.37-2.092a1.024 1.024 0 100 2.048 1.024 1.024 0 000-2.048z" />
          </svg>
        </SocialIcon>
        <SocialIcon href="#" aria-label="Twitter">
          <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Instagram">
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Facebook">
          <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
        </SocialIcon>
      </div>
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
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