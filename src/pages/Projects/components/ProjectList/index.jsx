import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import {
    ProjectWrapper,
    ProjectCardWrapper
} from "./styledProjectList";

export default function ProjectList({ projectList }) {
    return (
        <ProjectWrapper className="cards-wrapper">
            {projectList.map((project) => (
                <ProjectCardWrapper key={project.id} className="card">
                    <Link
                        to={`/${project.id}?title=${encodeURIComponent(project.title)}`}
                        className="card-link"
                    >
                        <ProjectCard info={project} />
                    </Link>
                </ProjectCardWrapper>
            ))}
        </ProjectWrapper>
    );
}
