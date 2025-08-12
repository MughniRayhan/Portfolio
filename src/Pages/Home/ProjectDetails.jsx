import { useParams, Link } from "react-router";
import SCMS from '../../assets/scms.png'
import GreenNest from '../../assets/GreenNest.png'
import Food from '../../assets/foodExpiry.png'

const projectDetails = {
  1: {
    name: "Sports Club Management System",
    image: {SCMS},
    stack: ["React.js", "Tailwind CSS","Node.js","Mongodb"],
    description: "A responsive React.js application for managing sports club activities including court bookings, role-based dashboards, payment processing with Stripe, and user authentication.",
    liveLink: "https://resplendent-longma-03a333.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/scms-client-side",
    challenges: "Handling state for favorites and cart across multiple components efficiently.",
    futurePlans: "Integrate backend with payment gateway and add user authentication.",
  },
  2: {
    name: "GreenNest",
    image: {GreenNest},
    stack: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
    description: "A full-featured web application to track and manage indoor plants. Users can view plant details, monitor watering schedules, and sort plants by care level or next watering date.",
    liveLink: "https://bucolic-duckanoo-1a2059.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/plant-care-tracker-client-side",
    challenges: "Implementing secure role-based permissions.",
    futurePlans: "Add event ticket booking and payment system.",
  },
  3: {
   id: 3,
    name: "Food Expiry Tracker System",
    image: {Food},
    stack: ["React.js", "Node.js", "Stripe Payment"],
    description: "A full-stack web app to track food items, monitor expiry dates, get usage suggestions, and minimize waste. Built with React, Tailwind CSS, Express.js, and MongoDB.",
    liveLink: "https://lighthearted-pony-e9a162.netlify.app/",
    githubLink: "https://github.com/MughniRayhan/food-expiry-client-side",
    challenges: "Integrating Stripe payment with parcel status updates.",
    futurePlans: "Implement parcel pickup scheduling.",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <h2 className="text-center mt-20 text-white">Project not found</h2>;
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <img src={project.image} alt={project.name} className="w-full rounded-xl mb-8" />
      <h2 className="text-4xl font-bold mb-4 text-white">{project.name}</h2>
      <p className="text-lg text-gray-400 mb-4">{project.description}</p>

      <h3 className="text-xl font-semibold mt-6 text-white">Technology Stack:</h3>
      <ul className="list-disc list-inside text-gray-400">
        {project.stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4">
        <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Live Project</a>
        <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">GitHub Repo</a>
      </div>

      <h3 className="text-xl font-semibold mt-6">Challenges Faced:</h3>
      <p className="text-gray-600">{project.challenges}</p>

      <h3 className="text-xl font-semibold mt-6">Future Plans:</h3>
      <p className="text-gray-600">{project.futurePlans}</p>

      <Link to="/projects" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Projects</Link>
    </section>
  );
}
