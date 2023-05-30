import React, { useState } from "react";
// import './RecipesDropdown.css'; // import CSS file
import { Link as Links } from "react-scroll";
import { Link } from "react-router-dom";
function RecipesDropdown() {
  const [open, setOpen] = useState(false);

  
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={()=>{setOpen(!open)}}>
        Recipes
      </button>
      <div className={`dropdown-content ${open ? "show" : "inactive"}`}>
        {/* <Links to="popular" smooth={true} duration={500}   onClick={handleMenuItemClick}>
          Popular
        </Links>
        <Links to="vegetarian" smooth={true} duration={500}  onClick={handleMenuItemClick}>
          Vegetarian
        </Links> */}
        <Link to="/american"  onClick={handleMenuItemClick}>American</Link>
        <Link to="/italian"  onClick={handleMenuItemClick}>Italian</Link>
        <Link to="/thai"  onClick={handleMenuItemClick}>Thai </Link>
        <Link to="/vegan"  onClick={handleMenuItemClick}>Vegan </Link>
      </div>
    </div>
  );
}

export default RecipesDropdown;
