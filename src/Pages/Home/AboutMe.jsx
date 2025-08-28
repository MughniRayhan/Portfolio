import React from "react";
import { motion, useScroll } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from '../../assets/resume.pdf'
import { div } from "motion/react-client";

const about = [
  {id:1, title: "My Programming Journey", content: "I started my programming journey with curiosity about how software works, beginning with C and C++. Over time, I explored Java, and eventually found my passion in web development with JavaScript, React, and the MERN stack."},

  {id:2, title: "The Work I Enjoy", content: "I love building user-friendly web apps with clean design and interactive features. Problem-solving excites me, and I enjoy working on real-world projects where creativity meets logic."},

  {id:3, title: "Hobbies & Interests", content: "Outside programming, I enjoy reading tech blogs and exploring creative design. These hobbies keep me energized and bring fresh ideas into my coding work."},

  {id:4, title: "Future Aspirations", content: "I aim to deepen my expertise in web development and explore emerging technologies like AI and blockchain. My goal is to create impactful solutions that enhance user experiences."}
]

function AboutMe() {
   const scrollYProgress = useScroll().scrollYProgress
  return (
    
<>
        <section className="pt-20 pb-16  lg:pb-0  skills-gradient bg-gradient-to-t from-primary/50 to-transparent text-white " data-aos="fade-up" data-aos-duration="2000" >
       
              <div className="px-6 lg:px-20">
                <motion.h2 className="text-3xl text-center lg:text-4xl font-bold   relative  w-[20%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-12" >
                About Me
              
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

              {/* My Image + Description */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-20 gap-10">
            <motion.img
              src="/images/my-profile.jpg" 
              alt="Mughni Rayhan"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-secondary shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center lg:items-start gap-6"
>
  {/* About Text */}
  <p className="text-gray-400 max-w-2xl text-center lg:text-left text-lg leading-relaxed">
    Hi, I’m <span className="text-secondary font-semibold">Mughni Rayhan</span>, 
    a passionate frontend developer who loves bringing ideas to life with clean UI, 
    smooth interactions, and modern web technologies. I enjoy turning complex 
    problems into simple, elegant solutions.
  </p>

  {/* Social Links & CV */}
  <div className="flex gap-6 items-center">
        {/* CV Download */}
    <a href={resume} download='resume' target="_blank" rel="noopener noreferrer" 
                className="border text-sm text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 duration-200 transition"
                >
                 Dowload CV
                 </a>
    {/* GitHub */}
    <a
      href="https://github.com/MughniRayhan"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-secondary transition text-2xl"
    >
      <FaGithub />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/mughni-rayhan-1aa587317/"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-secondary  transition text-2xl"
    >
      <FaLinkedin />
    </a>
  </div>
</motion.div>

          </div>

              <div className="relative">
                <div className="absolute lg:left-1/2 left-0 transform -tracking-x-1/2 lg:-translate-x-0 w-1 h-full bg-gradient-to-r from-primary to-secondary "></div>

               {about.map((item) => (
                 <div key={item.id} className={`flex flex-col lg:flex-row items-center pr-3 lg:pr-0 mb-12 ${item.id % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} `}>
                  
                  
                <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-2 border-primary w-5 h-5  rounded-full flex justify-center items-center shadow-2xl shadow-secondary z-10">
                </div>

                


                <div className={`w-full lg:max-w-lg px-8 py-12 lg:py-16  border border-secondary  rounded-bl-4xl  rounded-tr-4xl shadow-md shadow-primary bg-gray-900  backdrop:blur-lg ${item.id %2 ===0 ? "lg:ml-0, lg:text-left" : "lg:mr-0,lg:text-right"} lg:ml-38 lg:mr-37 ml-8 transform transition-transform duration-300 hover:scale-105`}>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.content}</p>
                </div>
                 </div>
               ))}
              </div>
              </div>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden lg:block'>
        <defs>
          {/* Gradient definition */}
          <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#050414", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#050414", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      
        <path
          fill="url(#wave)"
         d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,208C672,203,768,181,864,165.3C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
     
    </section>

</>
  );
}

export default AboutMe;

        