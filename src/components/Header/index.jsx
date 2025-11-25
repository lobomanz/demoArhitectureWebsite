import {HeaderWrapper} from "./styledHeader";
import {useEffect} from "react";

export default function Header() {
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
            <a className="logo" href="/">studiom2n</a>

            <div className="navigation">
                <a href="/projects">Projects</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact</a>
            </div>
        </HeaderWrapper>
    );
}
