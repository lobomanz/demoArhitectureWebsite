import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Gateway from "../../Gateway";
import ProjectList from "./components/ProjectList";

export default function Projects() {
    const { siteName } = useParams();

    const projectList = useMemo(() => {
        if (!siteName) return [];
        return Gateway.getSiteProjects(siteName);
    }, [siteName]);

    return (
        <>
            <ProjectList projectList={projectList} />
        </>
    );
}
