import { HeaderWrapper } from "./styledHeader";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Header() {
    const { siteName } = useParams();

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("headerAnimated");
        const header = document.querySelector("header");

        if (!hasAnimated) {
            header.classList.add("show");
            sessionStorage.setItem("headerAnimated", "true");
        } else {
            header.style.transition = "none";
            header.style.top = "0";
            header.style.opacity = "1";
        }
    }, []);

    return (
        <HeaderWrapper>
            {/* Logo → takes you to the homepage of the current site */}
            <Link className="logo" to={`/${siteName}`}>
                studiom2n
            </Link>

            <div className="navigation">
                <Link to={`/${siteName}/projects`}>Projects</Link>
                <Link to={`/${siteName}/about`}>About us</Link>
                <Link to={`/${siteName}/contact`}>Contact</Link>
            </div>
        </HeaderWrapper>
    );
}
