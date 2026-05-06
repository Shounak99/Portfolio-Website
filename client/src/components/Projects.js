import React from "react";
import PageTransition from "./PageTransition";
function Projects() {
  const [projectList, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <PageTransition>
      <section id="projects" className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        <p className="text-[#e05c3a] text-xs tracking-widest uppercase mb-4">
          WORK
        </p>
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#e05c3a] transition-all duration-300 rounded-lg p-6 mb-4"
          >
            <h3 className="text-white font-bold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-[#a0a0a0] text-sm mb-3">{project.description}</p>
            <p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e05c3a] hover:text-[#ff6b35] text-sm tracking-wide uppercase"
              >
                View Project
              </a>
            </p>
            <p className="text-[#e05c3a] text-xs tracking-wide uppercase">
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </section>
    </PageTransition>
  );
}

export default Projects;
