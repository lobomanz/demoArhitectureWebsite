import { useState } from "react";
import {
    CardContainer,
    ImageContainer,
    ResponsiveImage,
    Overlay,
    TextOverlay,
    Title
} from "./styledProjectCard";

export default function ProjectCard({ info }) {
    const [hover, setHover] = useState(false);

    // Format date → "MonthName, Year"
    const formatDate = (dateString) => {
        if (!dateString) return "";

        const [, month, year] = dateString.split("."); // ignore "day"

        const monthNames = [
            "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj",
            "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
        ];

        return `${monthNames[parseInt(month) - 1]}, ${year}`;
    };

    // Add spaces before capital letters (except the first)
    const formatProjectName = (name) => {
        if (!name) return "";
        return name.replace(/(?!^)([A-Z])/g, " $1");
    };

    const projectName = formatProjectName(info.projectInfo);
    const formattedDate = formatDate(info.projectDate);

    return (
        <CardContainer>
            <ImageContainer
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <ResponsiveImage
                    src={info.image}
                    alt={projectName}
                    loading="lazy"
                />

                <Overlay className={hover ? "visible" : ""} />

                <TextOverlay className={hover ? "visible" : ""}>
                    <h2>{projectName}</h2>
                    <p>{formattedDate}</p>
                </TextOverlay>
            </ImageContainer>

            <Title>
                {projectName}
                <br />
                {formattedDate}
            </Title>
        </CardContainer>
    );
}
