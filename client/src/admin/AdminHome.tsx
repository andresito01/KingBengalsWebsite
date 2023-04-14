import React from "react";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import AdminHomeCSS from "./styles/AdminHome.module.css";

/** >>>>>>>>>>>>>>>>       Birthday Reminder       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminHomePage = () => {
  return (
    <div className={AdminHomeCSS.adminHomeContainer}>
      {/**********************      Current User     *******************************/}
      <CurrentUser />
    </div>
  );
};

const CurrentUser = () => {
  // ************** Log Out ********************
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={AdminHomeCSS.currentUserContainer}>
      {/**********************      Current User     *******************************/}
      <label>{auth.currentUser?.displayName}</label>
      <button type="button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default AdminHomePage;
