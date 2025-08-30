import { Link, Links } from "react-router";
import SCMS from '../../assets/scms.png'
import GreenNest from '../../assets/GreenNest.png'
import Food from '../../assets/foodExpiry.png'
import { scale, useScroll } from "motion/react";
import { motion } from "motion/react"

const projects = [
  {
    id: 1,
    name: "Sports Club Management System",
    image: SCMS,
    stack: ["React.js", "Tailwind CSS","Node.js","Mongodb"],
    description: "A responsive React.js application for managing sports club activities including court bookings, role-based dashboards, payment processing with Stripe, and user authentication.",
    liveLink: "https://resplendent-longma-03a333.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/scms-client-side",
  },
  {
    id: 2,
    name: "GreenNest",
    image: GreenNest,
    stack: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
    description: "A full-featured web application to track and manage indoor plants. Users can view plant details, monitor watering schedules, and sort plants by care level or next watering date.",
    liveLink: "https://bucolic-duckanoo-1a2059.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/plant-care-tracker-client-side",
  },
  {
    id: 3,
    name: "Food Expiry Tracker System",
    image: Food,
    stack: ["React.js", "Node.js", "Stripe Payment"],
    description: "A full-stack web app to track food items, monitor expiry dates, get usage suggestions, and minimize waste. Built with React, Tailwind CSS, Express.js, and MongoDB.",
    liveLink: "https://lighthearted-pony-e9a162.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/food-expiry-client-side",
  },
];

export default function Projects() {
  const scrollYProgress = useScroll().scrollYProgress
  return (
    <section className="py-16 pb-20 text-white"  id="projects" data-aos="fade-up" data-aos-duration="2000">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
         <motion.h2 className="text-3xl text-center md:text-4xl font-bold   relative  w-[20%] mx-auto md:bg-gradient-to-t md:from-primary/30 md:via-gray-400 md:to-gray-200 md:bg-clip-text md:text-transparent mb-3" >
                My Projects
              
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-400  rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover "
              />
              <div className="p-4 pb-10   ">
                <h3 className="text-xl font-semibold my-2  text-gray-300">{project.name}</h3>
                <p className="text-gray-500 mb-5 text-sm ">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full  bg-gradient-to-b from-primary/80 to-primary/30 hover:bg-gradient-to-l hover:from-primary/30 hover:to-transparent hover:border hover:border-primary text-sm text-white font-medium py-3 px-4 rounded-lg transition-all duration-300" >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='card-wrapper h-[60px] w-[150px] mt-10'>
                   <Link to='/projects'
                   className="card-content  text-gray-300 flex justify-center items-center   font-semibold  "
                   >
                    View More
                    </Link>
          </div>
        </div>
    </section>
  );
}
