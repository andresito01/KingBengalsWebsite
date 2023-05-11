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
          <a
            className={FooterCSS.footerLinks}
            href="https://www.instagram.com/kingbengals/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <button className={FooterCSS.instagramBtn} id="test2.5instabtn">
              <img
                alt="instaImg"
                className={FooterCSS.instagramImg}
                src={require("../images/transparent-social-media (1).png")}
              />
            </button>
            <br></br>
            Instagram
          </a>
        </section>
      </section>
      {/* >>>>>>>>>   Empty Container <<<<<<<<<<<< */}
      <section>
        <img
          alt="KB logo"
          className={FooterCSS.logoContainer}
          src={require("../images/KB logo.png")}
        ></img>
      </section>

      {/* >>>>>>>>>   Contact Us Container <<<<<<<<<<<< */}
      <section className={FooterCSS.contactUsContainer}>
        <h4
          className={FooterCSS.footerLinks}
          onClick={() => navigate("/contact")}
          id="test2.6contact"
        >
          Contact us:
        </h4>
        <hr></hr>
        <li>phone: (###) ### ###</li>
        <li
          className={FooterCSS.footerLinks}
          onClick={() => navigate("/contact")}
        >
          kingbengalscattery@gmail.com
        </li>
        <li
          className={FooterCSS.footerLinks}
          onClick={() => navigate("/login")}
        >
          sign in
        </li>
      </section>
    </div>
  );
};

export default Footer;
