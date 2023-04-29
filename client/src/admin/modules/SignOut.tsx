import React from "react";
import { auth } from "../config/firebase";

import { useNavigate } from "react-router-dom";
import SignOutCSS from "./SignOut.module.css";
import { UserAuth } from "../context/AuthContext";

const SignOut = () => {
  const { logOut } = UserAuth();

  // ************** Log Out ********************
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={SignOutCSS.currentUserContainer}>
      {/**********************      Current User     *******************************/}
      <label>{auth.currentUser?.displayName}</label>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default SignOut;
