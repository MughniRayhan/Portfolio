import React from "react";
import { motion, useScroll } from "motion/react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const educationData = [
  {
    id: 1,
    program: "B.Sc. in Computer Science & Engineering",
    institution: "Metropolitan University, Sylhet",
    duration: "2022 - Present",
    grade: "CGPA: 3.95/4.00",
    icon: <FaUniversity className="text-4xl text-primary" />,
  },
  {
    id: 2,
    program: "Higher Secondary Certificate (HSC)",
    institution: "Barlekha Govt. College",
    duration: "2018 - 2020",
    grade: "GPA: 4.86/5.00",
    icon: <SiGoogleclassroom className="text-4xl text-secondary" />,
  },
  {
    id: 3,
    program: "Secondary School Certificate (SSC)",
    institution: "Barlekha Girl's High School",
    duration: "2016 - 2018",
    grade: "GPA: 4.72/5.00",
    icon: <FaSchool className="text-4xl text-accent" />,
  },
];

export default function Education() {
    const scrollYProgress = useScroll().scrollYProgress
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-transparent via-gray-950 to-gray-900 text-white relative">
<motion.h2 className="text-3xl text-center lg:text-4xl font-bold   relative  w-[40%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-12" >
                Academic Background
              
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
            className=" border border-secondary rounded-2xl p-8 flex flex-col items-center text-center shadow-md  overflow-hidden hover:shadow-primary bg-gradient-to-b from-primary/20 to-transparent transition-all duration-500 relative"
          >
            <div className="z-10 text-center flex flex-col items-center">
            <p className="mb-4 text-center">{edu.icon}</p>
            <h3 className="text-xl font-semibold mb-2 z-10">{edu.program}</h3>
            <p className="text-gray-300 mb-1">{edu.institution}</p>
            <p className="text-gray-500 mb-1">{edu.duration}</p>
            <p className="text-gray-400 font-medium">{edu.grade}</p>
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-transparent"
  style={{
    background:
      "conic-gradient(from 0deg,  oklch(23% 0.034 264.665))", // gray-700 to gray-800 to gray-700
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    padding: "3px",
  }}
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
