import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div id="Footer">
            <a href="https://dianalyse-signal.com">En savoir plus</a>
            <a href="https://www.facebook.com/pages/category/Business-Service/Di-Analyse-Signal-107259004001624">
                <img alt="fb icon" src="/assets/fb_icon.png"
                width="30px" />
            </a>
            <a href="https://www.linkedin.com/company/di-analyse-signal/?originalSubdomain=fr">
                <img alt="linkedin icon" src="/assets/linkedin_icon.png"
                width="30px" />
            </a>
            <a href="https://www.youtube.com/channel/UC-tpb-wgnQsluyaxUfCEVjg">
                <img alt="yt icon" src="/assets/yt_icon.png"
                width="30px" />
            </a>
            <span>contact@dianalyse.com</span>
        </div>
    )
}

export default Footer;