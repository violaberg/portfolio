"use client";

import TechStack from "./TechStack";
import NoiseBackground from "./NoiseBackground";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-5xl font-semibold py-4">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center mt-36 mb-6">
      <div className="card relative max-w-sm w-full mb-4">
        <NoiseBackground />
        <h1 className="text-5xl text-center pb-6">{project.name}</h1>
        <img
          src={project.image}
          alt={project.name}
          className="img-fluid w-3/4 mx-auto project-img shadow-lg rounded-lg"
        />

        {/* Content Section */}
        <div className="content p-3">
          <div className="overview">
            <h2 className="text-4xl font-semibold text-center py-4">Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-goal pt-4">
            <h2 className="text-4xl font-semibold text-center pb-4">Project Goal</h2>
            <p>{project.goal}</p>
          </div>

          <div className="key-features pt-4">
            <h2 className="text-4xl font-semibold text-center pb-4">Key Features</h2>
            <ul className="list-inside space-y-2">
              {project.features.map((feature, index) => {
                const [title, ...description] = feature.split(" – ");
                return (
                  <li className="list-disc" key={index}>
                    <span className="font-semibold">{title}</span> – {description.join(" – ")}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="color-scheme pt-4">
            <h2 className="text-4xl font-semibold text-center pb-4">Color Scheme</h2>
            <div className="space-y-4">
              {Array.isArray(project.colorScheme) &&
                project.colorScheme.map((item, index) => {
                  if (item.type === "intro") {
                    return <p key={index}>{item.text}</p>;
                  }
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        style={{ backgroundColor: item.color }}
                        className="w-3 h-3 rounded-full flex-shrink-0"
                      ></div>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="contribution pt-4">
            <h2 className="text-4xl font-semibold text-center pb-4">My Contribution</h2>
            <p>{project.contribution}</p>
          </div>

          <div className="tech-stack-container py-4 z-10 text-center">
            <h2 className="text-4xl font-semibold text-center pb-6">Tech Stack</h2>
            <TechStack techs={project.techStack} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-2 px-4">
          <button
            onClick={() => window.open(project.repo, "_blank")}
            className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 mr-2 cursor-pointer"
            aria-label="View Repository"
          >
            Repo
          </button>
          <button
            onClick={() => window.open(project.demo, "_blank")}
            className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 ml-8"
            aria-label="View Live Site"
          >
            Live Site
          </button>
        </div>
      </div>

      <div className="text-center pt-4 mt-4">
        <a href="/projects" className="btnCard p-3 rounded-lg shadow-lg font-semibold">
          Back to Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
