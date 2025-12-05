import {StyledFooter} from "./styledFooter.js";

export default function Footer() {


    return (
        <StyledFooter className="footer-wrapper">
            <div className="footer-container">
                <div className="contact">
                    <div className="title">Book us at</div>
                    <div className="email"><a href="mailto:hello@gmail.com">m2n@gmail.com</a></div>
                </div>
                <div className="copyright">COPYRIGHT©2025</div>
            </div>
        </StyledFooter>
    );
}
