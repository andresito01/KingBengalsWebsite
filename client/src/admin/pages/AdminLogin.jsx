import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";
import backgrounImg from "../../images/bengal-cat-coat-glitter.jpg";
import { GoogleButton } from "react-google-button";
import WebNavHeader from "../../components/WebNavHeader";

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
    <>
      <WebNavHeader />
      <div className="w-full h-screen">
        <img
          className="sm:block absolute w-full h-full object-cover "
          src={backgrounImg}
          alt="/"
        />
        <div className="bg-black/20 fixed top-0 left-0 w-full h-screen"></div>
        <div className="absolute w-full px-4 py-24 z-50">
          <div className="max-w-[420px] h-[400px] mx-auto bg-black/75 text-red-500 rounded-xl">
            <div className="max-w-[320px] mx-auto py-16 text-center justify-start">
              <h1 className="text-5xl font-bolt justify-center">
                <strong>Sign In </strong>

                <span className="text-amber-500 text-3xl">Employees only</span>
              </h1>
              {error ? <p className="p-3 bg-red-300 my-2">{error}</p> : null}
              <p className="text-2xl text-amber-200 my-6 py-5">
                This page is intended for employees only.
              </p>

              <div className="max-w-[240px] mx-auto py-8">
                <GoogleButton onClick={() => handleGoogleSignIn()} />
              </div>

              <div className="text-center text-amber-400  text-2xl">
                <p>
                  <span>Do you need help? </span>
                  <strong>
                    <Link
                      className="font-bold text-blue-400 hover:text-green-500"
                      to="/contact"
                    >
                      Contact Support
                    </Link>
                  </strong>
                </p>
              </div>
              <p className="text-center text-amber-400 my-20 text-2xl">
                <span>Return </span>
                <strong>
                  <Link
                    className="font-bold text-blue-400 hover:text-green-500"
                    to="/"
                  >
                    HomePage
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
