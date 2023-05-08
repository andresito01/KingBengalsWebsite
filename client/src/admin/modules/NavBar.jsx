import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Kblogo from "../../images/KB logo.png";
import NavBarCSS from "../styles/NavBar.module.css";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  console.log(user?.email);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={NavBarCSS.navbarContainer}>
      <div className={NavBarCSS.upperRowContainer}>
        <Link className={NavBarCSS.kbContainer} to="/adminHomePage">
          <div className={NavBarCSS.logoContainer}>
            <img src={Kblogo} alt="KB-logo" />
          </div>
          <h1>
            <strong>KingBengals </strong> <span>Admin</span>
          </h1>
        </Link>

        <div className={NavBarCSS.accountContainer}>
          <h4>{user?.displayName}</h4>
          <button onClick={() => handleLogout()}>Log Out</button>
        </div>
      </div>

      {/**********************      Options     *******************************/}

      <nav className={NavBarCSS.linksContainer}>
        <Link className={NavBarCSS.links} to="/adminParents">
          Parents
        </Link>

        <Link className={NavBarCSS.links} to="/adminLitters">
          Litters
        </Link>

        <Link className={NavBarCSS.links} to="/adminKittens">
          Kittens
        </Link>

        <Link className={NavBarCSS.links} to="/adminTestimonial">
          Testimonials
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
