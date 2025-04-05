import { projectData } from "./data";

const Projects = () => {
  return (
    <div className="projects-container py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData &&
          projectData.map((project) => (
            <div
              className="project-card bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              key={project.id}
            >
              <div className="project-header flex justify-between items-center mb-4">
                <i className="fa-regular fa-folder-open text-2xl text-indigo-500"></i>
                <div className="small-icons">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
