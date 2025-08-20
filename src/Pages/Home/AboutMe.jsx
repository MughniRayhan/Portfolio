import React from "react";
import { motion, useScroll } from "motion/react"

function AboutMe() {
   const scrollYProgress = useScroll().scrollYProgress
  return (
    <section className="py-16 px-6 md:px-20  text-white" data-aos="fade-up" data-aos-duration="2000">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-3 relative  w-[20%] mx-auto bg-gradient-to-t from-primary/30 via-gray-400 to-gray-200 bg-clip-text text-transparent" >
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

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-primary/50 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I’m <span className="text-primary font-semibold">Mughni Rayhan</span>, a passionate{" "}
            <span className="text-primary font-semibold">MERN Stack Developer</span> with a strong foundation in 
            HTML, CSS, JavaScript, React.js, Redux, Node.js, and MongoDB. My programming journey began 
            in my early university days, when I started experimenting with small web projects and quickly 
            discovered the joy of turning ideas into interactive, functional, and visually appealing applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I enjoy building responsive, user-friendly web experiences that combine clean design with 
            high performance. My favorite kind of work involves solving challenging problems, 
            creating smooth UI/UX experiences, and exploring new technologies that can push my 
            development skills to the next level.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Outside of coding, I enjoy exploring creativity through hobbies like{" "}
            <span className="text-primary">graphic design</span> and{" "}
            <span className="text-primary">content creation</span>. I’m also a big fan of sports — 
            especially cricket — which helps me stay active and maintain a balanced lifestyle.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            As a developer, I bring not only technical skills but also 
            a curious and adaptable mindset. I’m always eager to learn, 
            collaborate, and take on challenges that help me grow both 
            professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
