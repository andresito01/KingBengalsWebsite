import React from "react";
import { Link } from "react-router-dom";
import "./styles/BusinessCertificate.css";
import tica from "../images/Tica.png";
import kb from "../images/KbTempLogo.png";
import logo1 from "../images/TempLogo1.png";
import logo2 from "../images/TempLogo2.png";

const BusinessCertificate = () => {
  return (
    <div className="businessCertificate">
      <KbLogo />
      <BusinessCertificateText />
      <div className="certificateContainer">
        <TicaCertificate />
        <div className="rightCertificates">
          <TempLogo1 />
          <TempLogo2 />
        </div>
      </div>
    </div>
  );
};

const KbLogo = () => {
  return (
    <section>
      <img className="kbLogo" src={kb} alt="KB Logo" />
    </section>
  );
};
const TicaCertificate = () => {
  return (
    <div className="leftCertificate">
      <img className="ticaCertificate" src={tica} alt="Tica Certicate Logo" />
    </div>
  );
};
const TempLogo1 = () => {
  return <img className="tempLogo1" src={logo1} alt="Temporal Logo 1" />;
};
const TempLogo2 = () => {
  return <img className="tempLogo2" src={logo2} alt="Temporal Logo 2" />;
};

const BusinessCertificateText = () => {
  return (
    <section className="businessCertificateText">
      <h4>
        <p>
          We are proud certified members of TICA, The International Cat
          Association.
        </p>
        <p>
          See all of our cats' health certificates on their individual pages,
          <Link className="bcLink" to="/OurCats">
            here
          </Link>
        </p>
      </h4>
    </section>
  );
};

export default BusinessCertificate;
