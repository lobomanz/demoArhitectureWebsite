import {StyledFooter} from "./styledFooter.js";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


export default function Footer() {


    return (
        <StyledFooter className="footer-wrapper">
            <div className="footer-container">
                <div className="contact">
                    <div className="title">Contact us at</div>
                    <div className="email"><a href="mailto:hello@gmail.com">m2n@gmail.com</a> or at +3851234321</div>
                    <div className="socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter/></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook/></a>
                        <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/></a>

                    </div>
                </div>
                <div className="copyright">COPYRIGHT©2025</div>
            </div>
        </StyledFooter>
    );
}
