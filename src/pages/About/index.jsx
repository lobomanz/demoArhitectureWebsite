import React from "react";
import { StyledAbout } from "./styledAbout.js";
import { t } from "../../utils/i18n.js";
import { getAboutImages } from "../../content/siteData.js";

import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";

export default function AboutUs() {
  const aboutImages = getAboutImages();

  const heroImg = aboutImages[t("about.hero_img")];
  const section1img = aboutImages[t("about.section1_img")];
  const section3img = aboutImages[t("about.section3_img")];

  return (
    <>
      <Header />
      <StyledAbout $heroImg={heroImg}>
        <div className="container">
          <div className="hero-section">
            <div className="title-container">
              <h2 dangerouslySetInnerHTML={{ __html: t("about.hero_title") }} />
            </div>
          </div>
          <section className="about-section">
            <div className="section-one">
              <div className="left-container">
                <div className="section-one-title">
                  <h2>{t("about.section1_title")}</h2>
                </div>
                <div className="section-one-description">
                  <p>{t("about.section1_desc")}</p>
                </div>
              </div>
              <div className="right-container">
                <img src={section1img} alt="slika" />
              </div>
            </div>
            <div className="section-two">
              <div className="section-two-container">
                <h2 style={{ color: "white" }}>{t("about.section2_title")}</h2>
                <p>{t("about.section2_desc")}</p>
              </div>
            </div>
            <div className="section-three">
              <div className="left-container">
                <img src={section3img} alt="slika" />
              </div>
              <div className="right-container">
                <div className="section-three-title">
                  <p>
                    <strong>{t("about.section3_title1")}</strong> - {t("about.section3_desc1")}
                  </p>
                </div>
                <div className="section-three-description">
                  <p>
                    <strong>{t("about.section3_title2")}</strong> - {t("about.section3_desc2")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </StyledAbout>
      <Footer />
    </>
  );
}
