import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router'
import { motion } from "framer-motion"

function NavBar() {
 const [isScrolled,setIsScrolled] = useState(false);
 useEffect(()=>{
  const handleScrolled = ()=>{
    setIsScrolled(window.scrollY > 50)
  };
  window.addEventListener("scroll",handleScrolled);
  return ()=> window.removeEventListener("scroll",handleScrolled)
 },[])

// const navLnks = <>
// <motion.li
//   className="relative"
//   whileHover="hover"
//   initial="initial"
// >
//   <NavLink className="text-white" to="/">
//     Home
//   </NavLink>

//   {/* Animated underline */}
// <motion.span
//   className="absolute left-0 bottom-0 bg-white"
//   style={{
//     width: "100%",
//     height: "1px",
//     transformOrigin: "center",
//     scaleY: 0.2 // compress height
//   }}
//   variants={{
//     initial: { scaleX: 0 },
//     hover: { scaleX: 1 },
//   }}
//   transition={{ duration: 0.5, ease: "easeInOut" }}
// />
// </motion.li>
// <li><NavLink className="text-white" to='/about'>About</NavLink></li>
// <li><NavLink className="text-white" to='/skills'>Skills</NavLink></li>
// <li><NavLink className="text-white" to='/projects'>Projects</NavLink></li>
// <li><NavLink className="text-white" to='/contact'>Contact</NavLink></li>
// </>

const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className={`navbar fixed top-0 z-50 transition duration-300   text-white sm:px-20
    ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}
    `}>
  <div className="navbar-start">

    {/* logo */}
    <h3 className='sm:text-xl font-bold accent-gradient'>
      <span>&lt;</span>Mughni
      <span > / </span>Rayhan
      <span>&gt;</span>
    </h3>

  </div>
  <div className="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal px-4">
  {navLinks.map((link, index) => (
    <motion.li
      whileHover="hover"
      className="relative"
      initial="initial"
      key={index}
    >
      <NavLink className="text-white" to={link.to}>
        {link.name} {/* ✅ Only render string, not whole object */}
      </NavLink>

      {/* Underline animation */}
      <motion.span
        className="absolute left-0 bottom-0 bg-linear-to-r from-primary to-secondary"
        style={{
          width: "100%",
          height: "1px",
          transformOrigin: "center",
          scaleY: 0.2, 
        }}
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.li>
  ))}
</ul>

  </div>
  <div className="navbar-end">
    {/* social */}
    <div className='lg:flex gap-3 hidden text-lg'>
      <a href="https://github.com/MughniRayhan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaGithub />
       </a>
       <a href="https://www.linkedin.com/in/mughni-rayhan-1aa587317/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaLinkedin />
      </a>
    </div>
  

    <div className="dropdown  dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3  p-2 shadow ">
        
  {navLinks.map((link, index) => (
    <motion.li
      whileHover="hover"
      className="relative"
      initial="initial"
      key={index}
    >
      <NavLink className="text-white" to={link.to}>
        {link.name} {/* ✅ Only render string, not whole object */}
      </NavLink>

      {/* Underline animation */}
      <motion.span
        className="absolute left-0 bottom-0 bg-linear-to-r from-primary to-secondary"
        style={{
          width: "100%",
          height: "1px",
          transformOrigin: "center",
          scaleY: 0.2, // thinner underline
        }}
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.li>
  ))}


        <div className='lg:hidden  flex justify-center gap-2 mt-4'>
      <a href="https://github.com/MughniRayhan" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <FaGithub />
       </a>
       <a href="https://www.linkedin.com/in/mughni-rayhan-1aa587317/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <FaLinkedin />
      </a>
    </div>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar