// Projects.jsx
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Gateway from "../../Gateway"; 
import ProjectList from "./components/ProjectList";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await Gateway.getAllProjectsShortInfo();
        setProjectList(
          response.map((item) => ({
            id: item.id,
            projectDate: item.date,
            projectInfo: item.title,
            projectName: item.location,
            image: item.image,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    }

    fetchProjects();
  }, []);

  return (
    <>
      {/* React equivalent of useHead */}
      <Helmet>
        <title>Projects - Our Projects</title>
        <meta
          name="description"
          content="Look at a more detailed version of each of our projects"
        />
      </Helmet>

      {/* pass down list */}
      <ProjectList projectList={projectList} />

    </>
  );
}
