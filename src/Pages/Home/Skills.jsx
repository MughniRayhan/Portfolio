import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiC, SiCplusplus, SiJavascript, SiPython, SiPostman, SiExpress,SiNetlify, SiVercel } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Tilt from 'react-parallax-tilt';
import { motion, useScroll } from "motion/react";
import { Link } from "react-router";

// All skills in a single array with category property
const allSkills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML", category: "Frontend" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", category: "Frontend" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript", category: "Frontend" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js", category: "Frontend" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux", category: "Frontend" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS", category: "Frontend" },

  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", category: "Backend" },
  { icon: <SiExpress className="text-gray-500" />, name: "Express.js", category: "Backend" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB", category: "Backend" },

  { icon: <SiC className="text-blue-500" />, name: "C", category: "Programming Languages" },
  { icon: <SiCplusplus className="text-blue-400" />, name: "C++", category: "Programming Languages" },
  { icon: <FaJava className="text-red-500" />, name: "Java", category: "Programming Languages" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript", category: "Programming Languages" },
  { icon: <SiPython className="text-green-500" />, name: "Python", category: "Programming Languages" },

  { icon: <FaGitAlt className="text-orange-500" />, name: "Git", category: "Tools" },
  { icon: <FaGithub className="text-gray-300" />, name: "GitHub", category: "Tools" },
  { icon: <VscCode className="text-blue-500" />, name: "VS Code", category: "Tools" },
  { icon: <SiPostman className="text-orange-400" />, name: "Postman", category: "Tools" },
  {icon: <SiNetlify className="text-cyan-400" />, name: "Netlify", category: "Tools" },
  { icon: <SiVercel className="text-white" />, name: "Vercel", category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Programming Languages", "Tools"];

export default function Skills() {
  const scrollYProgress = useScroll().scrollYProgress
  const [filter, setFilter] = useState("All");

  const filteredSkills = filter === "All" ? allSkills : allSkills.filter(skill => skill.category === filter);

  return (
    <section className="py-20 px-6 md:px-20  skills-gradient text-white" data-aos="fade-up" data-aos-duration="2000">
         <motion.h2 className="text-3xl text-center md:text-4xl font-bold   relative  w-[20%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-3" >
                Skills
              
              <motion.span style={{
                width: "100%",
                  height: "2px",
                  transformOrigin: "center",
                scaleX:scrollYProgress
              }}
               
                transition={{ duration: 0.5, ease: "easeInOut" }}
              className="hidden lg:block absolute left-0 top-11 bg-linear-to-r from-primary to-secondary "
              >
              </motion.span>
              </motion.h2>
      <p className="accent-gradient lg:w-180 mx-auto text-sm text-center mb-12 mt-4">
        Here are the technologies, tools, and programming languages I use to build modern web applications.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? "bg-primary text-white shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredSkills.slice(0,8).map((skill, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-900 border border-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-primary hover:bg-gradient-to-b hover:from-primary/20 hover:to-transparent transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm text-gray-400 group-hover:text-white">{skill.name}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
      <div className='card-wrapper h-[60px] w-[150px] mt-10 mx-auto'>
                   <Link to='/skills'
                   className="card-content  text-gray-300 flex justify-center items-center   font-semibold  "
                   >
                    View All
                    </Link>
          </div>
    </section>
  );
}
