import React from 'react'
import { motion } from "motion/react"
import { Link, useLoaderData } from 'react-router'

function AllProjects() {
  const projects = useLoaderData()
  return (
    <div className="py-20 pb-20" id="projects" >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
         <h2 className="text-3xl text-center md:text-4xl font-bold   relative  w-[20%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-3" >
                My Projects
              </h2>
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
 
        </div>
    </div>
  )
}

export default AllProjects