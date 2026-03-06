import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { HeaderWrapper } from "./styledHeader";
import Modal from "../../components/ContactModal";
import { getContactFormImages } from "../../content/siteData.js";
import { t } from "../../utils/i18n.js";

export default function Header() {
  const { siteName } = useParams();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false); // contact modal
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  // ✅ NEW: React-driven header visibility (prevents React re-render from removing .show)
  const [headerShown, setHeaderShown] = useState(false);
  const [noIntroTransition, setNoIntroTransition] = useState(false);

  const menuBtnRef = useRef(null);

  const images = useMemo(() => {
    return getContactFormImages();
  }, []);

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

  // ESC to close menu + modal
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

  // ✅ One-time header intro animation, but controlled via React state
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("headerAnimated");

    if (!hasAnimated) {
      setHeaderShown(true);
      sessionStorage.setItem("headerAnimated", "true");
    } else {
      // show instantly, no animation
      setNoIntroTransition(true);
      setHeaderShown(true);
    }
  }, []);

  const onContactClick = () => {
    closeMenu();
    openModal();
  };

  return (
    <>
      <HeaderWrapper
        className={[
          "header",
          headerShown ? "show" : "",
          noIntroTransition ? "no-intro-transition" : "",
          !menuOpen ? "header-blur" : "",
        ].join(" ")}
      >
        <Link className={`logo ${menuOpen ? "color-white" : ""}`} to={`/${siteName}/homepage`}>
          {t("site.name")}
        </Link>

        {/* Desktop nav */}
        <div className="navigation">
          <Link to={`/${siteName}/projects`}>{t("header.projects")}</Link>
          <Link to={`/${siteName}/about`}>{t("header.about")}</Link>
          <Link className="open-modal-btn" onClick={openModal}>
            {t("header.contact")}
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
              <Link to={`/${siteName}/projects`} onClick={closeMenu}>
                {t("header.projects")}
              </Link>
              <Link to={`/${siteName}/about`} onClick={closeMenu}>
                {t("header.about")}
              </Link>
              <button type="button" onClick={onContactClick}>
                {t("header.contact")}
              </button>
            </div>
          </nav>
        </div>
      </HeaderWrapper>

      <Modal isOpen={isOpen} onClose={closeModal} images={images} />
    </>
  );
}
