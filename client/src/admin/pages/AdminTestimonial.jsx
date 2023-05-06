import React from "react";
import AdminParentsCSS from "../styles/AdminParents.module.css";
import AddNewTestimony from "../modules/AddNewTestimony";
import TestimonyOptions from "../modules/TestimonyOptions";
import Navbar from "../modules/NavBar";

/** >>>>>>>>>>>>>>>>      Admin Testimonials page       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminTestimonial = () => {
  return (
    <div className={AdminParentsCSS.adminParentsContainer}>
      {/*************  Navigation Bar  ****************/}
      <Navbar />

      {/*******     Parent Information  ***********/}

      <AddNewTestimony />
      <TestimonyOptions />
    </div>
  );
};

export default AdminTestimonial;
