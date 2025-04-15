import FullScreenComponent from "@/components/FullScreenComponent";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsShowcase from "@/components/SkillsShowcase";
import SocialFollow from "@/components/SocialFollow";
import IconCloud from "@/components/magicui/icon-cloud";
import TextRevealByWord from "@/components/magicui/text-reveal";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


export default function Home() {





  return (
    <main className="bg-white dark:bg-[#040404]">
      <div className="snap-start">
        <FullScreenComponent />
      </div>

      <div className="snap-start">
        <TextRevealByWord text="Code Crafted: Bridging Frontend Elegance with Backend Mastery" />
      </div>

      <div className="snap-start">
        <h2 id="skills" className="text-3xl w-full text-center font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h2>
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-col-reverse w-full h-full items-center justify-center">
          <div className="flex-1 flex items-center justify-center">
            <SkillsShowcase />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      <div className="snap-start">
        <TextRevealByWord text="Innovated: Where Vision Meets Code, Projects That Power Progress" />
      </div>

      <div className="snap-start">
        <ProjectShowcase />
      </div>

      <div className="snap-start">
        <SocialFollow />
      </div>


    </main>
  );
}
