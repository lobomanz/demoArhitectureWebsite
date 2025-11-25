import React from 'react';
import {StyledAbout} from "./styledAbout.js";
import section1img from "../../assets/About/about-section-1-img.jpg"

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
                    <section>
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
                    </section>
                </div>
            </StyledAbout>
        </>
    );
}