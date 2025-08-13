import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiC, SiCplusplus, SiJavascript, SiPython, SiPostman, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Tilt from 'react-parallax-tilt'
const skills = [
  {
    category: "Frontend",
    icons: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS" },
    ],
  },
  {
    category: "Backend",
    icons: [
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    ],
  },
  {
    category: "Programming Languages",
    icons: [
      { icon: <SiC className="text-blue-500" />, name: "C" },
      { icon: <SiCplusplus className="text-blue-400" />, name: "C++" },
      { icon: <FaJava className="text-red-500" />, name: "Java" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
       { icon: <SiPython className="text-green-500" />, name: "Python" },
    ],
  },
  {
    category: "Tools",
    icons: [
      { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
      { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
      { icon: <VscCode className="text-blue-500" />, name: "VS Code" },
      { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
    ],
  },
];

function Skills() {
  return (
    <section className="py-16 px-6 md:px-20 skills-gradient text-white" data-aos="fade-up" data-aos-duration="2000">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Skills
      </h2>
      <p className="text-gray-400 lg:w-180  mx-auto font-semibold text-center mb-12">These are the technologies, tools, and programming languages I have mastered and regularly use to build efficient, scalable, and modern web applications.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
        {skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="bg-gray-900 backdrop-blur-md p-6 border border-white rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
           data-aos="fade-right" data-aos-duration="2000"
          >
            <h3 className="text-xl text-center font-semibold mb-4 text-purple-400">
              {skillGroup.category}
            </h3>
             
            {/* animation */}
            <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
              {/* skills */}
            <div className="grid grid-cols-3 gap-4">
              {skillGroup.icons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group " 
                >
                  <div className="text-4xl transition-transform duration-300 group-hover:scale-125">
                    {item.icon}
                  </div>
                  <p className="text-sm mt-1 text-gray-400">{item.name}</p>
                </div>
              ))}
            </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
