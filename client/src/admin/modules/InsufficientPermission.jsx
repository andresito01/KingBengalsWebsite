import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";
import backgrounImg from "../../images/bengal-cat-coat-glitter.jpg";
import WebNavHeader from "../../components/WebNavHeader";

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
    <div className="w-full h-screen">
      <WebNavHeader />
      <img
        className="sm:block absolute w-full h-full object-cover "
        src={backgrounImg}
        alt="/"
      />

      <div className="bg-black/30 fixed top-0 left-0 w-full h-screen"></div>
      <div className="absolute w-full px-4 py-24 z-50">
        <div className="max-w-[380px] h-[350px] mx-auto bg-black/75 text-white rounded-xl">
          <div className="max-w-[280px] mx-auto py-16">
            <h1 className="text-red-500 text-3xl md:text-4xl font-bolt justify-center text-center ">
              Insufficient Permissions
            </h1>

            <p className="text-2xl text-amber-300 py-2 text-left justify-start">
              We apologize for the inconvenience, this page is intended for
              employees only.
            </p>

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
              <p>
                <span>Try again? </span>
                <strong>
                  <Link
                    className="font-bold text-blue-400 hover:text-green-500"
                    to="/login"
                  >
                    Sign In
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
  );
};

export default InsufficientPermission;
