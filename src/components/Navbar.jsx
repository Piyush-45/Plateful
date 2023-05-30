import React from "react";
// import logo2 from "../images/logo2.png";
import { BsSearch } from "react-icons/bs";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RecipesDropdown from "./DropDown";
import { UserAuth } from "../context/AuthContext";
import plateful from "../images/plateful.png";
// import MobileMenu from "./MobileMenu";
const Navbar = () => {
  let navigate = useNavigate();
  const { user, logOut } = UserAuth();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbars_container">
        <nav>
          <div className="logo-container">
            <p className="logo-h1">PLATEFUL</p>
            {/* <p className="logo-p">Discover your culinary kingdom</p> */}
          </div>
          <Search />
        </nav>

        <div className="second_navbar">
          <ul className="second_navbar__list">
            <li>
              <Link to={"/"} className="home-link">
                Home
              </Link>
            </li>
            <li>
              <RecipesDropdown />
            </li>
            <li>
            <Link to={"/blogs"} className="home-link">
              <li>Blog</li>
            </Link>
            </li>
            {/* <li>Submit A recipe</li> */}
            {user?.email ? (
              <>
              <Link to={"/account"} className="home-link">
                  <li>Saved Recipes</li>
                </Link>
                <Link onClick={handleLogout}>Log Out</Link>
                
              </>
            ) : (
              <>
              <Link to={"/register"} className="home-link">
                  <li>Register</li>
                </Link>
                <Link to={"/login"} className="home-link">
                  <li>Login</li>
                </Link>
                
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
