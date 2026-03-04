import React, {useMemo} from "react";
import HomepageSwiper from "./components/Swiper";
import {StyledHomepage} from "./styledHomepage.js";
import { getHomepageImages } from "../../content/siteData.js";
import Header from "../../components/Header/index.jsx";

const Homepage = () => {
    const images = useMemo(() => {
        return getHomepageImages();
    }, []);

    return (
        <>
            <Header/>
            <StyledHomepage>
                <HomepageSwiper images={images}/>
            </StyledHomepage>
        </>
    );
};

export default Homepage;
