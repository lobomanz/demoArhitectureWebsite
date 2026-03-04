import { StyledFooter } from "./styledFooter.js";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import gateway from "../../Gateway.js";
import { t } from "../../utils/i18n.js";

export default function Footer() {
  const { Name, Email, Phone } = gateway.getBasicInfoFromRoute();

  return (
    <StyledFooter className="footer-wrapper">
      <div className="footer-container">
        <div className="contact">
          <div className="title">{t("footer.contact_us")}</div>

          <div className="email">
            {Email && (
              <>
                <a href={`mailto:${Email}`}>{Email}</a>
                {Phone && t("footer.or_at")}
              </>
            )}
            {Phone}
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="copyright">
          {t("footer.copyright")} {Name}
        </div>
      </div>
    </StyledFooter>
  );
}
