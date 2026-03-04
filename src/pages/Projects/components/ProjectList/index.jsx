import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import {
    ProjectWrapper,
    ProjectCardWrapper
} from "./styledProjectList";
import { t } from "../../../../utils/i18n.js";

export default function ProjectList({ projectList }) {
    return (
        <ProjectWrapper className="cards-wrapper">
            {projectList.map((project) => {
                const localizedProject = t(`projects_data.${project.id}`);
                const projectTitle = localizedProject?.title || project.projectInfo.replace(/(?!^)([A-Z])/g, " $1");
                
                return (
                    <ProjectCardWrapper key={project.id} className="card">
                        <Link
                            to={`/projects/${project.id}?title=${encodeURIComponent(projectTitle)}`}
                            className="card-link"
                        >
                            <ProjectCard info={project} />
                        </Link>
                    </ProjectCardWrapper>
                );
            })}
        </ProjectWrapper>
    );
}
