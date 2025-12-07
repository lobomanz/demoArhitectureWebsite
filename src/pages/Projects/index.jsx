import {useParams} from "react-router-dom";
import {useMemo} from "react";
import Gateway from "../../Gateway";
import ProjectList from "./components/ProjectList";
import {StyledProjects} from "./styledProjects";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

export default function Projects() {
    const {siteName} = useParams();

    const projectList = useMemo(() => {
        if (!siteName) return [];
        return Gateway.getSiteProjects(siteName);
    }, [siteName]);

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
