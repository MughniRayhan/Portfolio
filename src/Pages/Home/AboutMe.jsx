import React from "react";

function AboutMe() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-900 text-white" data-aos="fade-up" data-aos-duration="2000">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I’m <span className="text-purple-400 font-semibold">Mughni Rayhan</span>, a passionate{" "}
            <span className="text-purple-400 font-semibold">MERN Stack Developer</span> with a strong foundation in 
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
            <span className="text-purple-400">graphic design</span> and{" "}
            <span className="text-purple-400">content creation</span>. I’m also a big fan of sports — 
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
