import { scale, useScroll } from "motion/react";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiC, SiCplusplus, SiJavascript, SiPython, SiPostman, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Tilt from 'react-parallax-tilt'
import { motion } from "motion/react"

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
    const scrollYProgress = useScroll().scrollYProgress
  return (
    <section className="py-16 px-6 md:px-20 skills-gradient text-white " data-aos="fade-up" data-aos-duration="2000" >
      <motion.h2 className="text-3xl text-center md:text-4xl font-bold   relative  w-[20%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-3" >
        Skills
      
      <motion.span style={{
        width: "100%",
          height: "2px",
          transformOrigin: "center",
        scaleX:scrollYProgress
      }}
       
        transition={{ duration: 0.5, ease: "easeInOut" }}
      className="hidden lg:block absolute left-0 top-10 bg-linear-to-r from-primary to-secondary "
      >
      </motion.span>
      </motion.h2>
      <p className="accent-gradient lg:w-180  mx-auto  text-sm text-center mb-12 mt-4">These are the technologies, tools, and programming languages I have mastered and regularly use to build efficient, scalable, and modern web applications.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8" >
        {skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="bg-gray-900  backdrop-blur-md px-6 py-10 border border-secondary  rounded-2xl shadow-lg hover:shadow-primary hover:bg-gradient-to-b hover:from-primary/50 hover:to-transparent group transform hover:-translate-y-0.5 transition-all duration-500"
           data-aos="zoom-in" data-aos-duration="2000"
          >
            <h3 className="sm:text-xl  text-center font-semibold mb-4 text-primary group-hover:text-gray-900">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {skillGroup.icons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center  group/inner" 
                >
                  <div className="sm:text-5xl text-4xl transition-transform duration-300 group-hover/inner:scale-125">
                    {item.icon}
                  </div>
                  <p className="text-sm mt-1 text-gray-400 group-hover:text-white">{item.name}</p>
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
