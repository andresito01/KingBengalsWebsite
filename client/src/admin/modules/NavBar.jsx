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
      <div className=" flex justify-between items-center relative  w-full p-2 z-50 rounded-xl ">
        <div className="flex items-center">
          <Link className="flex items-center" to="/adminHomePage">
            <img className="max-w-[100px] p-2" src={Kblogo} alt="KB-logo" />
            <h1
              className="text-amber-500
             text-4xl md:text-6xl font-bold font-sans cursor-pointer "
            >
              KingBengals{" "}
              <span className="text-white text-2xl md:text-4xl"> Admin</span>
            </h1>
          </Link>
        </div>
        <div className="block  mx-4 text-right text-xl md:text-3xl ">
          <Link to="/account">
            <button className="text-white md:mr-2">
              <strong>{user?.displayName}</strong>
            </button>
          </Link>
          <button
            onClick={() => handleLogout()}
            className="bg-red-700 px-2 py-2 rounded cursor-pointer text-white"
          >
            <strong>Log Out</strong>
          </button>
        </div>
      </div>
      <div className="">
        <nav className="flex text-amber-300 justify-center">
          <Link className=" text-amber-300" to="/adminParents">
            <h4 className="p-4 text-bold text-2xl md:text-3xl mx-4  hover:text-green-500 cursor-pointer">
              Parents
            </h4>
          </Link>
          <Link className=" text-amber-300" to="/adminLitters">
            <h4 className="p-4 text-bold text-2xl md:text-3xl mx-4  hover:text-green-500 cursor-pointer">
              Litters
            </h4>
          </Link>
          <Link className=" text-amber-300" to="/adminKittens">
            <h4 className="p-4 text-bold text-2xl md:text-3xl mx-4  hover:text-green-500 cursor-pointer">
              Kittens
            </h4>
          </Link>
          <Link className=" text-amber-300" to="/adminParents">
            <h4 className="p-4 text-bold text-2xl md:text-3xl mx-4  hover:text-green-500 cursor-pointer">
              Testimonials
            </h4>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
