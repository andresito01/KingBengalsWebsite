import React from "react";
import AdminLittersCSS from "../styles/AdminLitters.module.css";
import Navbar from "../modules/NavBar";
import AddNewKitten from "../modules/AddNewKitten";
import KittenOptions from "../modules/KittenOptions";

/** >>>>>>>>>>>>>>>>      Admin Litters page       <<<<<<<<<<<<<<<<<<<<<<*/
const AdminKittens = () => {
  return (
    <div className={AdminLittersCSS.adminLittersContainer}>
      {/*************  Navigation Bar  ****************/}
      <Navbar />

      {/*******     Litter Information  ***********/}
      <AddNewKitten />
      <KittenOptions />
    </div>
  );
};

export default AdminKittens;
