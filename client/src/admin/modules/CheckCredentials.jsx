import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";
import backgrounImg from "../../images/bengal-cat-coat-glitter.jpg";
import WebNavHeader from "../../components/WebNavHeader";

const CheckCredentials = () => {
  const [isThisAdmin, setIsThisAdmin] = useState(false);
  const [counter, setCounter] = useState(0);
  const { user } = UserAuth();
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
    }, 200);
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
    <div className="w-full h-screen">
      <WebNavHeader />
      <img
        className="sm:block absolute w-full h-full object-cover "
        src={backgrounImg}
        alt="/"
      />

      <div className="bg-black/30 fixed top-0 left-0 w-full h-screen"></div>
      <div className="absolute w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[330px] mx-auto bg-black/75 text-white rounded-xl">
          <div className="max-w-[310px] mx-auto py-16">
            <h1 className="text-red-500 text-3xl md:text-4xl font-bolt justify-center text-center ">
              Checking Credentials
            </h1>
            <p className="text-2xl text-amber-400 py-2">
              One moment pls, If this takes more than 3 secons please confirm
              that there is internet connection, or contact support if the
              problem continue
            </p>
            <p>User: {user?.email}</p>
            <p>Admin: {isThisAdmin}</p>
            <div className="py-2 my-2"></div>

            <div className="text-center text-amber-300 my-8">
              <p>
                <span>Try again?</span>{" "}
                <Link
                  className="font-bold text-blue-400 hover:text-green-500"
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <span>Go to </span>
                <Link
                  className="font-bold text-blue-400 hover:text-green-500"
                  to="/"
                >
                  HomePage
                </Link>{" "}
              </p>
              <p>
                <span>Or </span>{" "}
                <Link
                  className="font-bold text-blue-400 hover:text-green-500"
                  to="/contact"
                >
                  {" "}
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckCredentials;
