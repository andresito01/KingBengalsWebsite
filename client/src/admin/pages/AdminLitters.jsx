import React from "react";
import AdminLittersCSS from "../styles/AdminLitters.module.css";
import Navbar from "../modules/NavBar";
import AddNewLitter from "../modules/AddNewLitter";
import LitterOptions from "../modules/LitterOptions";
/** >>>>>>>>>>>>>>>>      Admin Litters page       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminLitters = () => {
  return (
    <div className={AdminLittersCSS.adminLittersContainer}>
      {/*************  Navigation Bar  ****************/}
      <Navbar />

      {/*******     Litter Information  ***********/}
      <AddNewLitter />
      <LitterOptions />
    </div>
  );
};

export default AdminLitters;
