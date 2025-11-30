import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Gateway from "../../Gateway";
import Gallery from "../../components/Gallery/index.jsx";
import { Wrapper, Title } from "./styledProject.js";

export default function ProjectSingle() {
    const { siteName, projectId } = useParams();
    const location = useLocation();

    // Get ?title= from the query string
    const searchParams = new URLSearchParams(location.search);
    const titleFromQuery = searchParams.get("title") || "Untitled Project";

    const [images, setImages] = useState([]);
    const [content, setContent] = useState("");

    /* ------------------------------------------------------
       LOAD PROJECT IMAGES
    ------------------------------------------------------ */
    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            const imgs = await Gateway.getProjectImages(siteName, projectId);
            if (!cancelled) setImages(imgs);
        }

        loadImages();
        return () => (cancelled = true);
    }, [siteName, projectId]);

    /* ------------------------------------------------------
       LOAD GOOGLE DOCS RICH TEXT
    ------------------------------------------------------ */
    useEffect(() => {
        let cancelled = false;

        async function loadText() {
            const res = await Gateway.getProjectRichText(siteName, projectId);
            if (!cancelled && res?.richText) {
                setContent(res.richText);
            }
        }

        loadText();
        return () => (cancelled = true);
    }, [siteName, projectId]);

    return (
        <Wrapper>
            {/* Title */}
            <Title>{titleFromQuery}</Title>

            {/* Image gallery */}
            <Gallery images={images} mode="1" />

            {/* HTML rich text from Google Docs */}
            <div 
                className="project-text"
                dangerouslySetInnerHTML={{ __html: content }}
            />

        </Wrapper>
    );
}
