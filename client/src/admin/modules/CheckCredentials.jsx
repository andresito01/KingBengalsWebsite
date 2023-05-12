import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAdmin } from "../context/AdminContext";
import Footer from "../../components/Footer";
import CheckingCredentialsCSS from "../styles/CheckingCredentials.module.css";
import WebNavHeader from "../../components/WebNavHeader";
import NavBarUnderLayer from "../../components/NavBarUnderLayer";

const CheckCredentials = () => {
  const [isThisAdmin, setIsThisAdmin] = useState(false);
  const [counter, setCounter] = useState(0);
  const { isAdmin } = UserAdmin();

  const navigate = useNavigate();

  // Check if user is admin 3 times
  const setTimerOut = () => {
    setTimeout(() => {
      console.log("checking:" + counter);
      setIsThisAdmin(isAdmin);
      setCounter((prevNum) => {
        return prevNum + 1;
      });
    }, 100);
  };

  // check credentials
  useEffect(() => {
    setTimerOut();
  });

  useEffect(() => {
    // if the user is admin go to the admin-homepage
    if (isThisAdmin) {
      return navigate("/adminHomePage");
    }
    // if we checked 2 times more, return insufficient permission
    else if (counter > 2) {
      return navigate("/insufficientPermission");
    }
    // else, wait and check one more time
    else {
      return;
    }
  }, [counter]);

  return (
    
    <div className={CheckingCredentialsCSS.checkingCredentialsContainer}>
      <NavBarUnderLayer/>
      
      <div className={CheckingCredentialsCSS.canvasContainer}>
        <div className={CheckingCredentialsCSS.titleContainer}>
          <h1>
            <strong>Checking Credentials </strong>
            <span>Wait please!</span>
          </h1>
        </div>
        <div className={CheckingCredentialsCSS.statementContainer}>
          <p>
            If this takes more than 3 seconds, please confirm that there is
            internet connection. Contact support if the problem persist.
          </p>
        </div>
        <div className={CheckingCredentialsCSS.linksContainer}>
          <p>
            <span>Do you need help? </span>
            <strong>
              <Link className={CheckingCredentialsCSS.links} to="/contact">
                Contact Support
              </Link>
            </strong>
          </p>
          <p>
            <span>Return </span>
            <strong>
              <Link className={CheckingCredentialsCSS.links} to="/">
                HomePage
              </Link>
            </strong>
          </p>
          <p>
            <span>Try again?</span>
            <strong>
              <Link className={CheckingCredentialsCSS.links} to="/login">
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

export default CheckCredentials;
