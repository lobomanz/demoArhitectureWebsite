import { useState, useMemo } from "react";
import {
  CardContainer,
  ImageContainer,
  ResponsiveImage,
  Overlay,
  TextOverlay,
  Title,
} from "./styledProjectCard";

// Moved outside the component to avoid re-creation & remove dependency warnings
const monthNames = [
  "Siječanj",
  "Veljača",
  "Ožujak",
  "Travanj",
  "Svibanj",
  "Lipanj",
  "Srpanj",
  "Kolovoz",
  "Rujan",
  "Listopad",
  "Studeni",
  "Prosinac",
];

export default function ProjectCard({ info }) {
  const [hover, setHover] = useState(false);

  // Compute the formatted date (memoized)
  const monthAndYear = useMemo(() => {
    if (!info.projectDate) return "";

    // Normalize separators (supports ".", "/", "-")
    const normalized = info.projectDate.replace(/[-/]/g, ".");
    const parts = normalized.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

    if (!parts) return "";

    const month = parseInt(parts[2], 10);
    const year = parts[3];
    const monthName = monthNames[month - 1];

    return monthName ? `${monthName}, ${year}` : "";
  }, [info.projectDate]);

  return (
    <CardContainer>
      <ImageContainer
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ResponsiveImage
          src={info.image}
          alt={info.projectInfo}
          loading="lazy"
        />

        <Overlay className={hover ? "visible" : ""} />

        <TextOverlay className={hover ? "visible" : ""}>
          <h2>{info.projectInfo}</h2>
          <p>{monthAndYear}</p>
        </TextOverlay>
      </ImageContainer>

      <Title>
        {info.projectInfo}
        <br />
        {monthAndYear}
      </Title>
    </CardContainer>
  );
}
