import { Link } from "react-router";
import SCMS from '../../assets/scms.png'
import GreenNest from '../../assets/GreenNest.png'
import Food from '../../assets/foodExpiry.png'
import { div } from "motion/react-client";
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
  
  return (
    <section className="py-16 " id="projects" data-aos="fade-up" data-aos-duration="2000">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white my-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white  rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover "
              />
              <div className="p-6   ">
                <h3 className="text-2xl font-semibold mb-2 text-gray-300">{project.name}</h3>
                <p className="text-gray-500 mb-5">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full bg-primary hover:bg-transparent hover:border hover:border-primary  text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300" >
                  View More 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
