import { useParams, Link, useLoaderData } from "react-router";



export default function ProjectDetails() {
  const projectDetails = useLoaderData()
  const { id } = useParams();
  const project = projectDetails[id-1];
  console.log("id: ", id, " project: ", project)

  if (!project) {
    return <h2 className="text-center mt-20 text-white">Project not found</h2>;
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto my-10">
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

      <h3 className="text-xl font-semibold mt-6 text-white">Challenges Faced:</h3>
      <p className="text-gray-500">{project.challenges}</p>

      <h3 className="text-xl font-semibold mt-6 text-white">Future Plans:</h3>
      <p className="text-gray-500">{project.futurePlans}</p>

      <Link to="/projects" className="inline-block mt-8 text-purple-600 hover:underline">← Back to Projects</Link>
    </section>
  );
}
