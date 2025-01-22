"use client";

import React from "react";

const projects = [
  {
    id: "1",
    name: "Project 1",
    description: "A brief description of Project 1.",
    image: "#",
    repo: "https://github.com/project1",
    demo: "https://project1.demo",
  },
  {
    id: "2",
    name: "Project 2",
    description: "A brief description of Project 2.",
    image: "#",
    repo: "https://github.com/project2",
    demo: "https://project2.demo",
  },
];

const Projects = () => {
  return (
    <div className="projects-container mt-12 px-4 sm:px-8 flex flex-wrap justify-center gap-6">
      {projects.map((project) => (
        <div key={project.id} className="max-w-sm w-full md:w-auto">
          <div className="project-card relative">
            <svg
              viewBox="0 0 100% 100%"
              xmlns="http://www.w3.org/2000/svg"
              className="noise"
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
            <img
              src={project.image}
              alt={project.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <div className="content p-4">
              <h2 className="text-lg font-semibold text-center">
                {project.name}
              </h2>
              <p className="text-center py-2">{project.description}</p>
            </div>
            <div className="flex justify-between mt-2 px-4">
              <button
                onClick={() => window.open(project.repo, "_blank")}
                className="primaryBtn rounded-lg shadow-lg font-semibold p-3 flex-1 mr-2"
              >
                Repo
              </button>
              <button
                onClick={() => window.open(project.demo, "_blank")}
                className="primaryBtn rounded-lg shadow-lg font-semibold p-3 flex-1 ml-2"
              >
                Live Site
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

