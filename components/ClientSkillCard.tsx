"use client"

import React, { useState } from 'react';

const ClientSkillCard = ({ skill, SkillCard } : any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
        <SkillCard {...skill} />
      </div>
      {isHovered && (
        <div className="absolute w-full mt-2 p-4 bg-blue-100 rounded-md text-sm text-blue-800 shadow-lg transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 animate-in fade-in slide-in-from-bottom">
          {skill.details}
        </div>
      )}
    </div>
  );
};

export default ClientSkillCard;