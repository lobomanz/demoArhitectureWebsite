import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Gateway from "../../Gateway";
import ProjectList from "./components/ProjectList";
import { StyledProjects } from "./styledProjects";

export default function Projects() {
  const { siteName } = useParams();

  const projectList = useMemo(() => {
    if (!siteName) return [];
    return Gateway.getSiteProjects(siteName);
  }, [siteName]);

  return (
    <>
      <StyledProjects>
        <ProjectList projectList={projectList} />
      </StyledProjects>
    </>
  );
}
