import projects from "../../data/projects";
import ProjectDetails from "../../../components/ProjectDetails";

export const metadata = {
  title: "Project Page",
  description:
    "Detailed information about individual projects including overview, goals, key features, color schemes, tech stack, and live demos. View project screenshots, descriptions, and links to source code.",
};

const page = async ({ params }) => {
  const { id } = await params;
  if (!id) {
    return <p>Project not found.</p>;
  }

  const project = projects.find((proj) => proj.id === id);
  if (!project) {
    return <p>Project not found.</p>;
  }

  return <ProjectDetails project={project} />;
};

export default page;