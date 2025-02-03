"use client";

import { use } from "react";
import projects from "../../data/projects";
import TechStack from "../../../components/TechStack";

const ProjectPage = ({ params }) => {
  const resolvedParams = use(params);

  const { id } = resolvedParams;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="text-center mt-10">Project not found</div>;
  }

  return (
    <div className="flex flex-col justify-center mt-36 mb-6">
      <div className="card relative max-w-sm w-full mb-4">
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="noise w-full h-full absolute top-0 left-0"
            preserveAspectRatio="none"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="6"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              filter="url(#noiseFilter)"
            />
          </svg>
          <h1 className="text-5xl text-center pb-6">
              {project.name}
          </h1>
          <img
            src={project.image}
            alt={project.name}
            className="img-fluid w-3/4 mx-auto project-img shadow-lg rounded-lg"
          />
          {/* Content Section */}
          <div className="content p-4">
            <div className="overview">
              <h2 className="text-4xl font-semibold text-center pb-4">Overview</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-goal pt-4">
              <h2 className="text-4xl font-semibold text-center pb-4">Project Goal</h2>
              <p>{project.goal}</p>
            </div>

            <div className="key-features pt-4">
              <h2 className="text-4xl font-semibold text-center pb-4">Key Features</h2>
              <p>{project.features}</p>
            </div>

            <div className="tech-stack-container py-4 z-10 text-center">
              <h2 className="text-4xl font-semibold text-center pb-6">Tech Stack</h2>
              <TechStack techs={project.techStack} />
            </div>
          </div>
          <div className="flex justify-between mt-2 px-4">
            <button
              onClick={() => window.open(project.repo, "_blank")}
              className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 mr-2 cursor-pointer"
            >
              Repo
            </button>
            <button
              onClick={() => window.open(project.demo, "_blank")}
              className="btnCard rounded-lg shadow-lg font-semibold p-3 flex-1 ml-8"
            >
              Live Site
            </button>
          </div>
        </div>
        <div className="text-center pt-4 mt-4">
        <a
          href="/projects"
          className="btnCard p-3 rounded-lg shadow-lg font-semibold"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
