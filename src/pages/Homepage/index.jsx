import { useParams } from "react-router-dom";
import { useMemo } from "react";
import HomepageSwiper from "./components/Swiper";
import { StyledHomepage } from "./styledHomepage.js";
import Gateway from "../../Gateway";

const Homepage = () => {
    const { siteName } = useParams();

    const images = useMemo(() => {
        if (!siteName) return [];
        return Gateway.getHomepageImages(siteName);
    }, [siteName]);

    return (
        <StyledHomepage>
            <HomepageSwiper images={images} />
        </StyledHomepage>
    );
};

export default Homepage;
