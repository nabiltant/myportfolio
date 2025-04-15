"use client"

import React from 'react';
import { Cloud, Code, Database, GitBranch, Layout, Repeat, Server, Shield, Smartphone, Terminal, TestTube, Wind } from 'lucide-react';
import dynamic from 'next/dynamic';
import NumberTicker from './magicui/number-ticker';

const ClientSkillCard = dynamic(() => import('./ClientSkillCard'), { ssr: false });

const SkillCard = ({ icon: Icon, title, description, level } : any) => (
  <div className="h-[300px] flex items-start justify-center flex-col bg-white dark:bg-black rounded-lg shadow-md p-6 mb-4 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 mr-3 text-blue-500 dark:text-blue-400" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
      <div 
        className="bg-black dark:bg-white h-2.5 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 block">
    <p className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={level} />% proficiency
    </p>
      </span>


  </div>
);

const skills = [
  {
    icon: Code,
    title: "Next.js",
    description: "Expert in server-side rendering, API routes, and building scalable web applications with Next.js.",
    level: 90,
    details: "Developed multiple production-grade applications with advanced features like SSR, ISR, and API routes."
  },
  {
    icon: Code,
    title: "TypeScript",
    description: "Proficient in using TypeScript to create robust, type-safe code and improve development workflows.",
    level: 85,
    details: "Implemented complex type systems and interfaces in large-scale projects, enhancing code quality and maintainability."
  },
  {
    icon: Code,
    title: "JavaScript",
    description: "Extensive experience in modern JavaScript development, including ES6+ features and asynchronous programming.",
    level: 95,
    details: "Developed numerous web applications and libraries using advanced JavaScript concepts and best practices."
  },
  {
    icon: Code,
    title: "Python",
    description: "Skilled in Python programming for web development, data analysis, and automation tasks.",
    level: 80,
    details: "Created backend services, data processing scripts, and machine learning models using Python and its ecosystem."
  },
  {
    icon: Database,
    title: "SQL",
    description: "Proficient in designing and optimizing relational databases using SQL.",
    level: 85,
    details: "Experienced in complex query optimization, database schema design, and working with various SQL databases like PostgreSQL and MySQL."
  },
  {
    icon: Database,
    title: "NoSQL",
    description: "Knowledgeable in NoSQL database systems and their use cases in modern web applications.",
    level: 75,
    details: "Worked with MongoDB, Cassandra, and Redis for various projects, implementing efficient data models and query patterns."
  },
  {
    icon: Database,
    title: "Mongoose",
    description: "Experienced in using Mongoose ODM for MongoDB in Node.js applications.",
    level: 80,
    details: "Implemented complex schemas, validation, and middleware using Mongoose in multiple projects."
  },
  {
    icon: Server,
    title: "API Design",
    description: "Skilled in designing and implementing RESTful and GraphQL APIs for web and mobile applications.",
    level: 90,
    details: "Created scalable and secure APIs following best practices, including authentication, rate limiting, and documentation."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Proficient in developing cross-platform mobile applications using React Native and Flutter.",
    level: 75,
    details: "Built and published several mobile apps for iOS and Android, integrating native features and optimizing performance."
  },
  {
    icon: Code,
    title: "Java",
    description: "Experienced in Java programming for backend development and Android app creation.",
    level: 70,
    details: "Developed enterprise-level applications and microservices using Java and Spring Boot framework."
  },
  {
    icon: Code,
    title: "React",
    description: "Expert in building dynamic and responsive user interfaces with React.",
    level: 95,
    details: "Developed and maintained large-scale React applications, implemented complex state management solutions, and created reusable component libraries."
  },
  {
    icon: Server,
    title: "Node.js",
    description: "Proficient in server-side JavaScript development using Node.js and its ecosystem.",
    level: 85,
    details: "Built scalable backend services, RESTful APIs, and real-time applications using Express.js, Socket.io, and other popular Node.js frameworks."
  },
  {
    icon: Cloud,
    title: "AWS",
    description: "Experienced in deploying and managing applications on Amazon Web Services.",
    level: 80,
    details: "Worked with various AWS services including EC2, S3, Lambda, DynamoDB, and implemented serverless architectures."
  },
  {
    icon: GitBranch,
    title: "Git & Version Control",
    description: "Skilled in using Git for version control and collaborative development.",
    level: 90,
    details: "Proficient in Git workflows, branching strategies, and resolving merge conflicts in large team environments."
  },
  {
    icon: Terminal,
    title: "Docker",
    description: "Experienced in containerizing applications and managing multi-container environments.",
    level: 75,
    details: "Created Dockerfiles, managed Docker images and containers, and implemented Docker Compose for complex application setups."
  },
  {
    icon: Code,
    title: "GraphQL",
    description: "Proficient in designing and implementing GraphQL APIs for efficient data fetching.",
    level: 80,
    details: "Developed GraphQL schemas, resolvers, and integrated GraphQL with various backend and frontend technologies."
  },
  {
    icon: Layout,
    title: "Responsive Web Design",
    description: "Skilled in creating responsive and mobile-first web designs.",
    level: 90,
    details: "Implemented responsive layouts using CSS Grid, Flexbox, and media queries, ensuring cross-browser compatibility."
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Experienced in writing and maintaining unit, integration, and end-to-end tests.",
    level: 85,
    details: "Proficient with testing frameworks like Jest, React Testing Library, and Cypress for ensuring code quality and reliability."
  },
  {
    icon: Repeat,
    title: "CI/CD",
    description: "Knowledgeable in setting up and maintaining continuous integration and deployment pipelines.",
    level: 80,
    details: "Implemented CI/CD workflows using tools like Jenkins, GitLab CI, and GitHub Actions for automated testing and deployment."
  },
  {
    icon: Shield,
    title: "Web Security",
    description: "Understanding of web security best practices and common vulnerabilities.",
    level: 75,
    details: "Implemented secure authentication systems, protected against XSS and CSRF attacks, and followed OWASP guidelines in web applications."
  }
];

const SkillsShowcase = () => {
  return (
    <div className="flex-1 p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <ClientSkillCard key={index} skill={skill} SkillCard={SkillCard} />
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;