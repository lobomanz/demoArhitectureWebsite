import { useState } from "react";
import {
    CardContainer,
    ImageContainer,
    ResponsiveImage,
    Overlay,
    TextOverlay,
    Title
} from "./styledProjectCard";
import { t } from "../../../../utils/i18n.js";

export default function ProjectCard({ info }) {
    const [hover, setHover] = useState(false);

    // Get localized data or fallback to parsed filename info
    const localizedProject = t(`projects_data.${info.id}`);
    const projectTitle = localizedProject?.title || info.projectInfo.replace(/(?!^)([A-Z])/g, " $1");
    const rawDate = localizedProject?.date || info.projectDate;

    // Format date → "MonthName, Year"
    const formatDate = (dateString) => {
        if (!dateString) return "";

        const parts = dateString.split("."); 
        if (parts.length < 3) return dateString;
        
        const month = parts[1];
        const year = parts[2];

        const monthNames = t("months");
        if (!Array.isArray(monthNames)) return dateString;

        return `${monthNames[parseInt(month) - 1]}, ${year}`;
    };

    const formattedDate = formatDate(rawDate);

    return (
        <CardContainer>
            <ImageContainer
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <ResponsiveImage
                    src={info.image}
                    alt={projectTitle}
                    loading="lazy"
                />

                <Overlay className={hover ? "visible" : ""} />

                <TextOverlay className={hover ? "visible" : ""}>
                    <h2>{projectTitle}</h2>
                    <p>{formattedDate}</p>
                </TextOverlay>
            </ImageContainer>

            <Title>
                {projectTitle}
                <br />
                {formattedDate}
            </Title>
        </CardContainer>
    );
}
