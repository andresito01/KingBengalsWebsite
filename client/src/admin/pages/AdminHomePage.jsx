import React from "react";
import AdminHomeCSS from "../styles/AdminHome.module.css";
import SignOut from "../modules/SignOut";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

/** >>>>>>>>>>>>>>>>       Home Page (for Admins)       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminHomePage = () => {
  const { user, admin } = UserAuth();
  const navigate = useNavigate();
  return (
    <div className={AdminHomeCSS.adminHomeContainer}>
      {/**********************      Current User     *******************************/}
      <SignOut />
      <div className={AdminHomeCSS.welcomeContainer}>
        <h2>Welcome to our admin Page</h2>
        <p>Available Options</p>
        <input
          type="button"
          onClick={() => navigate("/adminOurCats", { replace: true })}
          value="Edit Parents"
        />
      </div>
    </div>
  );
};
export default AdminHomePage;
