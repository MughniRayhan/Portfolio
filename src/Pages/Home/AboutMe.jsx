import React from "react";
import { motion, useScroll } from "motion/react"

function AboutMe() {
   const scrollYProgress = useScroll().scrollYProgress
  return (
        <section className="py-16 px-6 md:px-20 skills-gradient text-white " data-aos="fade-up" data-aos-duration="2000" >
              <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-3 relative  w-[20%] mx-auto bg-gradient-to-t from-primary/30 via-gray-400 to-gray-200 bg-clip-text text-transparent mb-12" >
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Card 1: Programming Journey */}
        <div 
        className="  backdrop-blur-md px-6 py-10 border border-secondary  rounded-bl-4xl  rounded-tr-4xl shadow-lg hover:shadow-primary  transform hover:-translate-y-0.5 transition-all duration-500"
        >
          <div>
            <h2>My Programming Journey</h2>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <p>
              I started my programming journey with curiosity about how
              software works, beginning with <b>C and C++</b>. Over time, I
              explored <b>Java</b>, and eventually found my passion in
              <b> web development</b> with JavaScript, React, and the MERN stack.
            </p>
          </div>
        </div>

        {/* Card 2: Work I Enjoy */}
        <div  className=" backdrop-blur-md px-6 py-10 border border-secondary  rounded-br-4xl rounded-tl-4xl shadow-lg hover:shadow-primary  transform hover:-translate-y-0.5 transition-all duration-500">
          <div>
            <h2>The Work I Enjoy</h2>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <p>
              I love building <b>user-friendly web apps</b> with clean design and
              interactive features. Problem-solving excites me, and I enjoy
              working on <b>real-world projects</b> where creativity meets logic.
            </p>
          </div>
        </div>

        {/* Card 3: Hobbies & Interests */}
        <div  className="  backdrop-blur-md px-6 py-10 border border-secondary  rounded-tl-4xl rounded-br-4xl shadow-lg hover:shadow-primary  transform hover:-translate-y-0.5 transition-all duration-500">
          <div>
            <h2>Hobbies & Interests</h2>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <p>
              Outside programming, I enjoy <b>reading tech blogs</b> and exploring <b>creative design</b>. These
              hobbies keep me energized and bring fresh ideas into my coding
              work.
            </p>
          </div>
        </div>

        {/* Card 4: Personality */}
        <div  className="  backdrop-blur-md px-10 py-10 border border-secondary  rounded-bl-4xl rounded-tr-4xl shadow-lg hover:shadow-primary  transform hover:-translate-y-0.5 transition-all duration-500">
          <div>
            <h2>Who I Am</h2>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <p>
              I am a <b>curious learner</b> with a drive for growth and
              innovation. I value <b>teamwork, adaptability</b>, and maintaining
              a positive mindset. I believe technology should not only solve
              problems but also <b>inspire people</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
