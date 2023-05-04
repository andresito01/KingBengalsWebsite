import React from "react";
import AdminParentsCSS from "../styles/AdminParents.module.css";
import AddNewParent from "../modules/AddNewParent";
import ParentOptions from "../modules/ParentOptions";
import Navbar from "../modules/NavBar";

/** >>>>>>>>>>>>>>>>      Admin Parents page       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminParents = () => {
  return (
    <div className={AdminParentsCSS.adminParentsContainer}>
      {/*************  Navigation Bar  ****************/}
      <Navbar />

      {/*******     Parent Information  ***********/}

      <AddNewParent />
      <ParentOptions />
    </div>
  );
};

export default AdminParents;
