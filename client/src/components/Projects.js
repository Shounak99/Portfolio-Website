import React from "react";
function Projects() {
  const [projectList, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch("https://shounak-portfolio-backend.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <section className="max-w-4xl mx-auto py-16 px-8">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      {projectList.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-4"
        >
          <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-2">{project.description}</p>
          <p className="text-gray-500 text-sm">
            <strong>Tech:</strong> {project.tech}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
