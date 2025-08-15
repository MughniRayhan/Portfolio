import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Profile from '../../assets/my-profile.jpg'
import resume from '../../assets/resume.pdf'
import { motion } from "framer-motion"

function Banner() {
  return (
    <div className='py-24  px-20 '>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
          
           {/* left side */}
           <div className='md:w-1/2 text-center md:text-left text-white mt-8'>

             <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight'>Hi, I am</h2>
             <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-b from-primary/30 via-gray-400 to-gray-200 bg-clip-text text-transparent'>Mughni Rayhan</h2>
             {/*  */}
             <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#276F7A] leading-tight'>
                <span className='text-white '>I am a </span>
                <ReactTypingEffect 
                text={[
                      
                       'MERN Stack Developer',
                       'Frontend Developer' 
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
               <span className='text-[#1D5861]'>{cursor}</span>
               )}
                >
                </ReactTypingEffect>
             </h3>

             <p className="sm:text-lg  text-gray-400 leading-relaxed mb-10 mt-8">
            I’m a passionate MERN Stack Developer who loves turning ideas into interactive, user-friendly web applications. 
            With a strong foundation in React.js, and modern UI frameworks, I focus on creating responsive and performance-optimized solutions.
            </p>

            

           <div className='card-wrapper h-[60px] w-[150px] mt-10'>
            <a href={resume} download='resume' target="_blank" rel="noopener noreferrer" 
            className="card-content  text-gray-300 flex justify-center items-center   font-bold "
            >
             Dowload CV
             </a>
             </div>
           </div>

           {/* right side */}
           <div className='md:w-1/2  flex justify-center md:justify-end items-center'>
            <img src={Profile} alt="Mughni Rayhan"  
            className='w-[90%] h-[50%] object-cover rounded-full drop-shadow-[0_10px_20px_rgba(39,111,122,0.5)] flex justify-center'
            />
           </div>
        </div>
<motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden lg:block' animate={{x:[0,20,0],y:[0,20,0]}}
        transition={{duration:4, repeat:Infinity}} >
  <defs>
    {/* Gradient definition */}
    <linearGradient id="waveGradient" x1="20%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#6c757d", stopOpacity: 1 }} />
      <stop offset="47%" style={{ stopColor: "#0d1321", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#000814", stopOpacity: 1 }} />
    </linearGradient>
  </defs>

  <path
    fill="url(#waveGradient)"
    d="M0,256L30,266.7C60,277,120,299,180,282.7C240,267,300,213,360,197.3C420,181,480,203,540,229.3C600,256,660,288,720,293.3C780,299,840,277,900,229.3C960,181,1020,107,1080,117.3C1140,128,1200,224,1260,234.7C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
  />
</motion.svg>
    </div>
  )
}

export default Banner