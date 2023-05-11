import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";
import Footer from "../../components/Footer";
import { GoogleButton } from "react-google-button";
import WebNavHeader from "../../components/WebNavHeader";
import AdminLoginCSS from "../styles/AdminLogin.module.css";

const AdminLogin = () => {
  const [error, setError] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const { GoogleSignIn } = UserAuth();
  const { isAdmin } = UserAdmin();

  const navigate = useNavigate();

  //  Handle Sign-in with google
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn();
      setIsLogged(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (isLogged) {
      if (isAdmin) {
        return navigate("/adminHomePage");
      } else {
        return navigate("/checkCredentials");
        //return navigate("/insufficientPermission");
      }
    }
    return;
  }, [isLogged]);

  return (
    <div className={AdminLoginCSS.adminLoginContainer}>
      <WebNavHeader />
      <div className={AdminLoginCSS.loginContainer}>
        <div className={AdminLoginCSS.titleContainer}>
          <h1>
            <strong>Sign In </strong>
            <span>Admin only</span>
          </h1>
        </div>
        <div>
          {error ? <p className={AdminLoginCSS.loginError}>{error}</p> : null}
        </div>

        <div className={AdminLoginCSS.statementContainer}>
          <p>This page is intended for administration only.</p>
        </div>

        <div className={AdminLoginCSS.googleButton}>
          <GoogleButton onClick={() => handleGoogleSignIn()} id='test5.1googlebtn'/>
        </div>

        <div className={AdminLoginCSS.linksContainer}>
          <p>
            <span>Do you need help? </span>
            <strong>
              <Link className={AdminLoginCSS.links} to="/contact">
                Contact Support
              </Link>
            </strong>
          </p>
          <p>
            <span>Return </span>
            <strong>
              <Link className={AdminLoginCSS.links} to="/">
                HomePage
              </Link>
            </strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
