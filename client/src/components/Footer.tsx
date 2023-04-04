import React from "react";
import { useNavigate } from "react-router-dom";
import FooterCSS from "./styles/Footer.module.css";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    Footer   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Footer = () => {
  let navigate = useNavigate();
  return (
    // >>>>>>>>>>>>>>>>>       Footer Container          <<<<<<<<<<<<<<<<<<<<
    <div className={FooterCSS.footerContainer}>
      {/* >>>>>>>>>   Follow Us Container <<<<<<<<<<<< */}
      <section className={FooterCSS.followUSContainer}>
        <h4>Follow us:</h4>
        <hr></hr>
        <section>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <button className={FooterCSS.instagramBtn}>
              <img
                alt="instaImg"
                className={FooterCSS.instagramImg}
                src={require("../images/instagramlogo.png")}
              />
            </button>
            <br></br>
            Instagram
          </a>
        </section>
      </section>
      {/* >>>>>>>>>   Contact Us Container <<<<<<<<<<<< */}
      <section className={FooterCSS.contactUsContainer}>
        <h4 className={FooterCSS.footerLinks} onClick={() => navigate("/contact")}> Contact us:</h4>
        <hr></hr>
        <li>phone: (###) ### ###</li>
        <li className={FooterCSS.footerLinks} onClick={() => navigate("/contact")}>
          email: #######@####.com
        </li>
      </section>
    </div>
  );
};

export default Footer;
