import { useParams, Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import {
    ProjectWrapper,
    ProjectCardWrapper
} from "./styledProjectList";

export default function ProjectList({ projectList }) {
    const { siteName } = useParams();

    return (
        <ProjectWrapper>
            {projectList.map((project) => (
                <ProjectCardWrapper key={project.id}>
                    <Link
                        to={`/${siteName}/projects/${project.id}?title=${project.projectInfo}`}
                        className="card-link"
                    >
                        <ProjectCard info={project} />
                    </Link>
                </ProjectCardWrapper>
            ))}
        </ProjectWrapper>
    );
}
