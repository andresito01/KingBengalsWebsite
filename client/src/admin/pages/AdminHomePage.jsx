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
          <div>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminParents">
                <p>Parents</p>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminLitters">
                <p>Litters</p>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminKittens">
                <p>Kittens</p>
              </Link>
            </strong>
            <strong>
              <Link className={AdminHomeCSS.links} to="/adminTestimonial">
                <p>Testimonials</p>
              </Link>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHomePage;
