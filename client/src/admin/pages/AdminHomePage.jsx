import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../modules/NavBar";
import AdminHomeCSS from "../styles/AdminHome.module.css";

/** >>>>>>>>>>>>>>>>       Home Page (for Admins)       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminHomePage = () => {
  const { user } = UserAuth();

  // ***********      Admin Homepage container  *************
  return (
    <div className={AdminHomeCSS.adminHomeContainer}>
      {/***********      NavBar    *****************/}
      <Navbar />
      {/**********     Canvas: Black Frame      *********************/}
      <div className={AdminHomeCSS.canvasContainer}>
        <div className={AdminHomeCSS.titleContainer}>
          <h1>
            <strong>Welcome </strong>

            <span>{user?.displayName},</span>
          </h1>
        </div>

        <div className={AdminHomeCSS.statementContainer}>
          <p>What would you like to do?.</p>
        </div>

        <div className={AdminHomeCSS.linksContainer}>
          {/**********************      Options     *******************************/}
          <h2>Update:</h2>
          <ul>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminParents">
                <li>Parents</li>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminLitters">
                <li>Litters</li>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminKittens">
                <li>Kittens</li>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminTestimonial">
                <li>Testimonials</li>
              </Link>
            </strong>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminHomePage;
