import { HeaderWrapper, Logo, Nav } from "./styledHeader";
import { useEffect } from "react";

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
      <Logo href="/">studiom2n</Logo>

      <Nav>
        <a href="/projects">projects</a>
        <a href="/about">about us</a>
        <a href="/contact">contact</a>
      </Nav>
    </HeaderWrapper>
  );
}
