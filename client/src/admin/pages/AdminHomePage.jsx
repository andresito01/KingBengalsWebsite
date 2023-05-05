import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../modules/NavBar";
import AdminHomeCSS from "../styles/AdminHome.module.css";

/** >>>>>>>>>>>>>>>>       Home Page (for Admins)       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminHomePage = () => {
  const { user } = UserAuth();

  return (
    <div>
      {/**********************      Admin Homepage container     *******************************/}
      <div className={AdminHomeCSS.adminHomeContainer}>
        {/***********      NavBar    *****************/}
        <Navbar />
        {/**********************      Canvas: Black Frame      *******************************/}
        <div className={AdminHomeCSS.cavasContainer}>
          <div className="max-w-[350px] md:max-w-[500px] h-[320px] md:h-[360px] mx-auto my-16 bg-black/60 text-white rounded-xl">
            {/**********************      welcomning     *******************************/}
            <div className="max-w-[260px] md:max-w-[400px] mx-auto py-16 text-left justify-start">
              <h1 className=" text-3xl md:text-5xl font-bolt justify-center">
                <strong className="text-amber-500">Welcome </strong>

                <span>{user?.displayName},</span>
              </h1>
              <div className="max-w-[200px] md:max-w-[280px] mx-auto  text-amber-200">
                <p className="text-2xl md:text-3xl my-6 py-2 text-center">
                  What would you like to do?
                </p>

                {/**********************      Options     *******************************/}
                <h2 className="text-amber-500 text-center text-3xl md:text-5xl">
                  Update:
                </h2>
                <ul className="text-purple-300 text-center text-xl md:text-4xl ">
                  <strong>
                    <Link
                      className="font-bold text-sky-400 hover:text-green-500 "
                      to="/adminParents"
                    >
                      <li className="py-1">Parents</li>
                    </Link>
                  </strong>
                  <strong>
                    <Link
                      className="font-bold text-sky-400 hover:text-green-500 "
                      to="/adminLitters"
                    >
                      <li className="py-1">Litters</li>
                    </Link>
                  </strong>
                  <strong>
                    <Link
                      className="font-bold text-sky-400 hover:text-green-500 "
                      to="/adminKittens"
                    >
                      <li className="py-1">Kittens</li>
                    </Link>
                  </strong>
                  <strong>
                    <Link
                      className="font-bold text-sky-400 hover:text-green-500 "
                      to="/adminTestimonial"
                    >
                      <li className="py-1">Testimonials</li>
                    </Link>
                  </strong>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHomePage;
