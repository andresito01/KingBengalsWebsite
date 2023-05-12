import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";
import WebNavHeader from "../../components/WebNavHeader";
import Footer from "../../components/Footer";
import InsufficientPermissionCSS from "../styles/InsufficientPermission.module.css";
import NavBarUnderLayer from "../../components/NavBarUnderLayer";

const InsufficientPermission = () => {
  const { isAdmin } = UserAdmin();
  const { logOut } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // lastime check if user is admin
    if (isAdmin) {
      return navigate("/adminHomePage");
    } else {
      // else: Logout current user
      try {
        logOut();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <div className={InsufficientPermissionCSS.insufficientPermissionContainer}>
      <NavBarUnderLayer/>
      <WebNavHeader />
      <div className={InsufficientPermissionCSS.canvasContainer}>
        <div className={InsufficientPermissionCSS.titleContainer}>
          <h1>
            <strong>Admin</strong>
            <span>Insufficient Permissions</span>
          </h1>
        </div>
        <div className={InsufficientPermissionCSS.statementContainer}>
          <p>
            We apologize for the inconvenience, this page is intended only for
            administration.
          </p>
        </div>
        <div className={InsufficientPermissionCSS.linksContainer}>
          <p>
            <span>Do you need help? </span>
            <strong>
              <Link className={InsufficientPermissionCSS.links} to="/contact">
                Contact Support
              </Link>
            </strong>
          </p>
          <p>
            <span>Return </span>
            <strong>
              <Link className={InsufficientPermissionCSS.links} to="/">
                HomePage
              </Link>
            </strong>
          </p>
          <p>
            <span>Try again?</span>
            <strong>
              <Link className={InsufficientPermissionCSS.links} to="/login">
                Sign In
              </Link>
            </strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsufficientPermission;
