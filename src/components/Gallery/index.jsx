import { useEffect, useState, useCallback } from "react";
import {
    GalleryContainer,
    GalleryContainerService,
    ImageContainer,
    GalleryImage,
    ChevronButton,
    LeftWrapper,
    RightWrapper,
    Counter
} from "./styledGallery";

export default function Gallery({ images = [], mode = "1" }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate alt text
    const generateAlt = useCallback((url) => {
        if (!url) return "";
        const file = url.split("/").pop().split(".")[0];
        const readable = file.replace(/[-_]+/g, " ");
        return readable.charAt(0).toUpperCase() + readable.slice(1);
    }, []);

    // Stable callbacks
    const nextImage = useCallback(() => {
        if (!images.length) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        if (!images.length) return;
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Preload images
    useEffect(() => {
        images.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }, [images]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [nextImage, prevImage]);

    const Container =
        mode === "2" ? GalleryContainerService : GalleryContainer;

    return (
        // ← The key resets state WITHOUT using effects
        <Container key={images.join()}>
            <LeftWrapper>
                <ChevronButton
                    className="left-one"
                    onClick={prevImage}
                    aria-label="Previous image"
                />
            </LeftWrapper>

            <ImageContainer>
                {images.length > 0 && (
                    <GalleryImage
                        src={images[currentIndex]}
                        alt={generateAlt(images[currentIndex])}
                        loading="lazy"
                    />
                )}
            </ImageContainer>

            <RightWrapper>
                <ChevronButton
                    className="right-one"
                    onClick={nextImage}
                    aria-label="Next image"
                />
            </RightWrapper>

            <Counter>
                {currentIndex + 1} / {images.length}
            </Counter>
        </Container>
    );
}
