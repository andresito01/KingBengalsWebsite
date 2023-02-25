import React from "react";
import { Link } from "react-router-dom";
import BusinessCertificateCSS from "./styles/BusinessCertificate.module.css";
import tica from "../images/Tica.png";
import kb from "../images/KbTempLogo.png";
import logo1 from "../images/TempLogo1.png";
import logo2 from "../images/TempLogo2.png";

/* >>>>>>>>>>>> Business Certificate Container <<<<<<<<<<<<<<<<*/
const BusinessCertificate = () => {
  return (
    <div className={BusinessCertificateCSS.businessCertificateContainer}>
      <KbLogo />
      <BusinessCertificateText />
      {/* >>>>>>>>>>>>  Certificates' Container  <<<<<<<<<<<<<<<< */}
      <div className={BusinessCertificateCSS.certificateContainer}>
        <TicaCertificate />
        {/* >>>>>>>>>>>  Temp Certificates Container  <<<<<<<<<<<*/}
        <div className={BusinessCertificateCSS.tempCertificates}>
          <TempLogo1 />
          <TempLogo2 />
        </div>
      </div>
    </div>
  );
};
/* >>>>>>>>>>>>>>>>>>   KingBengals' Logo     <<<<<<<<<<<<<<<<<<<<<*/
const KbLogo = () => {
  return (
    <section className={BusinessCertificateCSS.kbLogoContainer}>
      <img src={kb} alt="KB Logo" />
    </section>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>>     Business Certificate Statement  <<<<<<<<<<<<<<<<<<<<<*/
const BusinessCertificateText = () => {
  return (
    <section className={BusinessCertificateCSS.businessCertificateText}>
      <h4>
        <p>
          We are proud certified members of <strong>TICA</strong>, The
          International Cat Association.See all of our cats' health certificates
          on their individual pages
          <Link className={BusinessCertificateCSS.bcLink} to="/OurCats">
            . here
          </Link>
        </p>
      </h4>
    </section>
  );
};

/* >>>>>>>>>>>>>>>>    Tica Certificates      <<<<<<<<<<<<<<<<<<*/
const TicaCertificate = () => {
  return (
    <div className={BusinessCertificateCSS.ticaCertificate}>
      <img src={tica} alt="Tica Certicate Logo" />
    </div>
  );
};

/* >>>>>>>>>>>>>>>>    Temp Certificates      <<<<<<<<<<<<<<<<<<*/
const TempLogo1 = () => {
  return (
    <div>
      <img src={logo1} alt="Temporal Logo 1" />
    </div>
  );
};
const TempLogo2 = () => {
  return (
    <div>
      <img src={logo2} alt="Temporal Logo 2" />
    </div>
  );
};

export default BusinessCertificate;
