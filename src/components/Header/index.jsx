import {useEffect, useMemo, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {HeaderWrapper} from "./styledHeader";
import Modal from "../../components/ContactModal";
import Gateway from "../../Gateway.js";

export default function Header() {
    const {siteName} = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const images = useMemo(() => {
        if (!siteName) return [];
        return Gateway.getContactFormImages(siteName);
    }, [siteName]);


    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // cleanup on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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
        <>
            <HeaderWrapper>
                <Link className="logo" to={`/${siteName}`}>
                    studiom2n
                </Link>

                <div className="navigation">
                    <Link to={`/${siteName}/projects`}>Projects</Link>
                    <Link to={`/${siteName}/about`}>About us</Link>
                    <Link className="open-modal-btn" onClick={openModal}>
                        Contact
                    </Link>
                </div>
            </HeaderWrapper>

            <Modal isOpen={isOpen} onClose={closeModal} images={images}/>
        </>
    );
}
