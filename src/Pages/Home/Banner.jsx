import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Profile from '../../assets/my-profile.jpg'

function Banner() {
  return (
    <div className='py-24 px-20  '>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
           {/* left side */}
           <div className='md:w-1/2 text-center md:text-left text-white mt-8'>
             <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight'>Hi, I am</h2>
             <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight'>Mughni Rayhan</h2>
             {/*  */}
             <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                <span className='text-white '>I am a</span>
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
               <span className='text-[#8245ec]'>{cursor}</span>
               )}
                >
                </ReactTypingEffect>
             </h3>

             <p className="sm:text-lg  text-gray-400 leading-relaxed mb-10 mt-8">
            I’m a passionate MERN Stack Developer who loves turning ideas into interactive, user-friendly web applications. 
            With a strong foundation in React.js, and modern UI frameworks, I focus on creating responsive and performance-optimized solutions.
            </p>

            <a href="https://docs.google.com/document/d/1Fhon7H5aTFScKgDDMVSHt8c5ojrDepFiYMcZ4Oi8hRU/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" 
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold  transition duration-300 transform scale-105"
            style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
            }}
            >
                          Dowload CV
                  </a>
           </div>

           {/* right side */}
           <div className='md:w-1/2  flex justify-center md:justify-end items-center'>
            <img src={Profile} alt="Mughni Rayhan"  
            className='w-[90%] h-[50%] object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] flex justify-center'
            />
           </div>
        </div>
    </div>
  )
}

export default Banner