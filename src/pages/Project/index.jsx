import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectImages, getProjectRichText } from "../../content/siteData";
import Gallery from "../../components/Gallery/index.jsx";
import { StyledProject } from "./styledProject.js";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { t } from "../../utils/i18n.js";

export default function ProjectSingle() {
    const { projectId } = useParams();
    const location = useLocation();

    // Get ?title= from the query string
    const searchParams = new URLSearchParams(location.search);
    const rawTitle = searchParams.get("title") || t("project.untitled");

    // Convert "MyAwesomeTitle" -> "My Awesome Title"
    const formattedTitle = rawTitle
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase())
        .trim();

    const [images, setImages] = useState([]);
    const [content, setContent] = useState("");

    /* ------------------------------------------------------
       LOAD PROJECT IMAGES
    ------------------------------------------------------ */
    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            const imgs = await getProjectImages(projectId);
            if (!cancelled) setImages(imgs);
        }

        loadImages();
        return () => (cancelled = true);
    }, [projectId]);

    /* ------------------------------------------------------
       LOAD GOOGLE DOCS RICH TEXT
    ------------------------------------------------------ */
    useEffect(() => {
        let cancelled = false;

        async function loadText() {
            const res = await getProjectRichText(projectId);
            if (!cancelled && res?.richText) {
                setContent(res.richText);
            }
        }

        loadText();
        return () => (cancelled = true);
    }, [projectId]);

    return (
        <>
            <StyledProject>
                <Header />

                {/* Title */}
                <h1 className="project-title">{formattedTitle}</h1>

                {/* Image gallery */}
                <Gallery images={images} mode="1" />

                {/* HTML rich text from Google Docs */}
                <div
                    className="project-text"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </StyledProject>

            <Footer />
        </>
    );
}
