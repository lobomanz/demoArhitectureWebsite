import { useEffect, useMemo, useState, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { HeaderWrapper } from "./styledHeader";
import Modal from "../../components/ContactModal";
import Gateway from "../../Gateway.js";

export default function Header() {
  const { Name, Email, Phone } = Gateway.getBasicInfoFromRoute();
  const { siteName } = useParams();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false); // contact modal
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  const menuBtnRef = useRef(null);

  const images = useMemo(() => {
    if (!siteName) return [];
    return Gateway.getContactFormImages(siteName);
  }, [siteName]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuBtnRef.current?.focus());
  };

  // Lock scroll if either menu or modal is open
  useEffect(() => {
    if (isOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ESC to close menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (menuOpen) closeMenu();
        if (isOpen) closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, isOpen]);

  // Your one-time header intro animation
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

  const onContactClick = () => {
    closeMenu();
    openModal();
  };

  return (
    <>
      <HeaderWrapper className={`header ${!menuOpen ? "header-blur" : ""}`} >
        <Link className={`logo ${menuOpen ? "color-white" : ""}`} to={`/${siteName}`}>
          {Name}
        </Link>

        {/* Desktop nav */}
        <div className="navigation">
          <Link to={`/${siteName}/projects`}>Projects</Link>
          <Link to={`/${siteName}/about`}>About us</Link>
          <Link className="open-modal-btn" onClick={openModal}>
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={menuBtnRef}
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Mobile menu overlay + panel */}
        <div
          className={`mobile-overlay ${menuOpen ? "open" : ""}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeMenu();
          }}
          aria-hidden={!menuOpen}
        >
          <nav id="mobile-menu" className="mobile-panel">
            <div className="mobile-links">
              <Link className="glass-link" to={`/${siteName}/projects`} onClick={closeMenu}>
                Projects
              </Link>
              <Link className="glass-link" to={`/${siteName}/about`} onClick={closeMenu}>
                About us
              </Link>
              <button className="glass-link" type="button" onClick={onContactClick}>
                Contact
              </button>
            </div>
          </nav>
        </div>
      </HeaderWrapper>

      <Modal isOpen={isOpen} onClose={closeModal} images={images} />
    </>
  );
}
