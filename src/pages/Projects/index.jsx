import {useMemo} from "react";
import { getProjects } from "../../content/siteData";
import ProjectList from "./components/ProjectList";
import {StyledProjects} from "./styledProjects";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

export default function Projects() {
    const projectList = useMemo(() => {
        return getProjects();
    }, []);

    return (
        <>
            <StyledProjects>
                <Header/>
                <ProjectList projectList={projectList}/>
            </StyledProjects>
            <Footer/>
        </>
    );
}
