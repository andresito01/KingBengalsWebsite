import React from "react";
import { Link } from "react-router-dom";
import BusinessCertificateCSS from "./styles/BusinessCertificate.module.css";
import tica from "../images/Tica.png";
import kb from "../images/KB logo.png";

/* >>>>>>>>>>>> Business Certificate Container <<<<<<<<<<<<<<<<*/
const BusinessCertificate = () => {
  return (
    <div className={BusinessCertificateCSS.businessCertificateContainer}>
      <section>
        <div className={BusinessCertificateCSS.bcTitle}>
          <section className={BusinessCertificateCSS.kbLogoContainer}>
            <img src={kb} alt="KB Logo" />
          </section>
          <h3>Certification</h3>
        </div>

        <div className={BusinessCertificateCSS.businessCertificateText}>
          <p>
            We are proud certified members of <strong>TICA</strong>, The
            International Cat Association. See our cats&nbsp;
            <Link className={BusinessCertificateCSS.bcLink} to="/OurCats">
              here
            </Link>
            .
          </p>
        </div>

        <div className={BusinessCertificateCSS.ticaCertificate}>
          <img src={tica} alt="Tica Certicate Logo" />
        </div>
      </section>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>>     Business Certificate Statement  <<<<<<<<<<<<<<<<<<<<<*/

export default BusinessCertificate;
