import { useParams, Link, useLoaderData } from "react-router";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";



export default function ProjectDetails() {
  const projectDetails = useLoaderData();
  const { id } = useParams();
  const project = projectDetails[id - 1];


  if (!project) {
    return (
      <h2 className="text-center mt-20 text-red-500 text-xl">
        Project not found
      </h2>
    );
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto my-10 text-gray-200">
      {/* Project Image */}
      <div
        className="overflow-hidden rounded-2xl shadow-lg mb-8"
        data-aos="fade-up" data-aos-duration="2000"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Title */}
      <h2
        className="sm:text-4xl text-3xl font-extrabold mb-3 sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent"
        data-aos="fade-right" data-aos-duration="2000"
      >
        {project.name}
      </h2>
      <p
        className="sm:text-lg accent-gradient leading-relaxed mb-6"
        data-aos="fade-left" data-aos-duration="2000"
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div
        className="bg-gray-900 p-6 rounded-xl shadow-md mb-8"
        data-aos="zoom-in" data-aos-duration="2000"
      >
        <h3 className="text-xl font-semibold text-gray-200 mb-3">
          🛠️ Technology Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/20 border border-primary text-accent px-3 py-1 rounded-lg text-sm"
              data-aos="flip-up"
              data-aos-delay={index * 100}
              data-aos-duration="2000"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      {project.features && (
        <div
          className="bg-gray-900 p-6 rounded-xl shadow-md mb-8"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <h3 className="text-xl font-semibold text-gray-200 mb-3">
            ⭐ Key Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2" data-aos="fade-up" data-aos-delay={idx * 150} data-aos-duration="2000">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && (
        <div
          className="bg-gray-900/40 p-6 rounded-xl shadow-md mb-8"
          data-aos="fade-right" data-aos-duration="2000"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            ⚡ Challenges Faced
          </h3>
          <p className="text-gray-300">{project.challenges}</p>
        </div>
      )}

      {/* Future Plans */}
      {project.futurePlans && (
        <div
          className="bg-gray-900/40 p-6 rounded-xl shadow-md mb-8"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            🚀 Future Plans
          </h3>
          <p className="text-gray-300">{project.futurePlans}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 mt-6" data-aos="zoom-in-up" data-aos-duration="2000">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg shadow-md transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded-lg shadow-md transition"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10" data-aos="fade-up" data-aos-duration="2000">
        <Link to="/projects" className="inline-block text-white hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
