import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SignOutCSS from "./SignOut.module.css";

const SignOut = () => {
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
    <div className={SignOutCSS.currentUserContainer}>
      {/**********************      Current User     *******************************/}
      <label>{auth.currentUser?.displayName}</label>
      <button type="button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default SignOut;
