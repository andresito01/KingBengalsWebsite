import React from "react";
import WebNavHeader from "../components/WebNavHeader";
import BusinessCertificate from "../components/BusinessCertificate";
import "./styles/Home.css";
const Home = () => {
  return (
    <div className="homePage">
      <WebNavHeader />
      <BusinessCertificate />
    </div>
  );
};

export default Home;
