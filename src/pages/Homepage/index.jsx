import {useParams} from "react-router-dom";
import React, {useMemo} from "react";
import HomepageSwiper from "./components/Swiper";
import {StyledHomepage} from "./styledHomepage.js";
import Gateway from "../../Gateway";
import Header from "../../components/Header/index.jsx";

const Homepage = () => {
    const {siteName} = useParams();

    const images = useMemo(() => {
        if (!siteName) return [];
        return Gateway.getHomepageImages(siteName);
    }, [siteName]);

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
