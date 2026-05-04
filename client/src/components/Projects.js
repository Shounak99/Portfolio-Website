import React from "react";
function Projects() {
  const [projectList, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <section className="max-w-4xl mx-auto py-16 px-8">
      <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
        WORK
      </p>
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

      {projectList.map((project) => (
        <div
          key={project.id}
          className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c9a84c] transition-all duration-300 rounded-lg p-6 mb-4"
        >
          <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-[#a0a0a0] text-sm mb-3">{project.description}</p>
          <p className="text-[#c9a84c] text-xs tracking-wide uppercase">
            <strong>Tech:</strong> {project.tech}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
