import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import { ProjectWrapper, ProjectCardWrapper } from "./styledProjectList";

export default function ProjectList({ projectList }) {
  return (
    <ProjectWrapper>
      {projectList.map((project) => (
        <ProjectCardWrapper key={project.id}>
          <Link
            to={`/project/${project.id}?title=${encodeURIComponent(
              project.projectInfo
            )}`}
            className="card-link"
          >
            <ProjectCard info={project} />
          </Link>
        </ProjectCardWrapper>
      ))}
    </ProjectWrapper>
  );
}
