import React from 'react'
import { motion } from "motion/react"
import { Link, useLoaderData } from 'react-router'

function AllProjects() {
  const projects = useLoaderData()
  return (
    <div className="py-20 px-6 md:px-20  skills-gradient text-white" >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
         <h2 className="text-3xl text-center md:text-4xl font-bold    mx-auto md:bg-gradient-to-t md:from-primary/30 md:via-gray-400 md:to-gray-200 sm:bg-clip-text md:text-transparent mb-3">
                My Projects
              </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {projects.map((project) => (
            <div
  key={project.id}
>
  <motion.div
    className="relative border border-gray-400 rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col h-full"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, delay: 0.2  }}
  >
    {/* Image */}
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-48 object-cover"
    />

   

    {/* Card Content */}
    <div className="relative p-4 pb-10 z-10">
      <h3 className="text-xl font-semibold my-2 text-gray-300">
        {project.name}
      </h3>
      <p className="text-gray-400 mb-5 text-sm">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        className="w-full bg-gradient-to-b from-primary/80 to-primary/30 hover:bg-gradient-to-l hover:from-primary/30 hover:to-transparent hover:border hover:border-primary text-sm text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
      >
        See Details
      </Link>
    </div>
  </motion.div>
</div>
          ))}
        </div>
 
        </div>
    </div>
  )
}

export default AllProjects