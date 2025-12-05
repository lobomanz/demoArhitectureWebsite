import React from 'react';
import {StyledAbout} from "./styledAbout.js";
import section1img from "../../assets/About/about-section-1-img.jpg"
import Footer from "../../components/Footer/index.jsx";

export default function AboutUs() {


    return (
        <>
            <StyledAbout>
                <div className="container">
                    <div className="hero-section">
                        <div className="title-container">
                            <h2>We do not design architecture <br/> we design buildings</h2>
                        </div>
                    </div>
                    <section className="about-section">
                        <div className="section-one">
                            <div className="left-container">
                                <div className="section-one-title">
                                    <h2>WHAT WE DO</h2>
                                </div>
                                <div className="section-one-description">
                                    <p>We have spent years exploring the path towards sustainable development of
                                        projects. Located on the island of Mallorca, a highly esteemed environment but
                                        also under significant urban and touristic pressure that is depleting ecosystems
                                        and altering the landscape.</p>
                                </div>
                            </div>
                            <div className="right-container">
                                <img src={section1img} alt="slika"/>
                            </div>

                        </div>
                        <div className="section-two">
                            <div className="section-two-container">
                                <p>Our insular condition frames and restricts the rules of the game regarding the use of
                                    materials and construction techniques. The degradation of the landscape highlights
                                    the potential to extract valuable insights from local culture and traditions to be
                                    used in the pursuit of solutions deeply rooted in time and place. Without dwelling
                                    in nostalgia, we look towards the future and global issues with a critical and
                                    forward-thinking approach to local knowledge.
                                    <br/>
                                    <br/>
                                    We focus on material experimentation to break free from the established norms of the
                                    construction industry, which seeks to standardize and phase out traditional
                                    techniques due to the globalization of architecture. We design based on the
                                    resources available in the immediate environment (Limestone, Sandstone or Marés,
                                    Earth, Straw, Posidonia, Sheep’s Wool), to create a product that functions well in
                                    our climate. Local and vernacular. We propose moving forward by looking back,
                                    without losing sight of the past and tradition; continuing to refine tradition as an
                                    indisputable heritage; defending regional identities against totalizing uniformity.
                                    We prefer evolution over revolution.</p>
                            </div>
                        </div>
                        <div className="section-three">
                            <div className="left-container">
                                <img src={section1img} alt="slika"/>
                            </div>
                            <div className="right-container">
                                <div className="section-three-title">
                                    <p>ETHOS - We strongly advocate for an integrated and collaborative design
                                        approach, where architecture, interior design, and landscaping seamlessly
                                        converge to create a unified whole.</p>
                                </div>
                                <div className="section-three-description">
                                    <p> Munarq is dedicated to shaping architecture that goes beyond mere structures,
                                        but rather encapsulates profound spaces within meticulously crafted buildings.
                                        Embracing the surrounding context, whether natural or man-made, we perceive
                                        constraints not as hindrances but as catalysts that fuel our creative journey.
                                        Our ethos revolves around sculpting spaces that harmonize intimacy with
                                        expansiveness, utilizing natural light nuances to craft dynamic settings that
                                        transform throughout the day. The evocative and tactile attributes of materials
                                        are instrumental in animating these spaces, infusing them with a unique
                                        identity. Leveraging our extensive experience collaborating with artisans
                                        worldwide, munarq has honed a distinctive design language marked by its
                                        inventive play with materials and light.
                                        <br/>
                                        <br/>
                                        Our work is a testament to the belief that architecture is more than just the
                                        creation of space; it is the crafting of an experience where the senses, space,
                                        and time are in perfect harmony. By drawing on natural materials, traditional
                                        techniques, and holistic principles, we create environments that are not only
                                        functional but also deeply resonant, nurturing the human spirit and celebrating
                                        the beauty of the natural world. Through this approach, we aspire to create
                                        architecture that is timeless, sustainable, and, above all, in harmony with the
                                        world around it.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </StyledAbout>
            <Footer/>
            
        </>
    );
}