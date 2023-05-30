import React from "react";
import RandomRecipe from "../RandomRecipe";
import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";

const Home = () => {

  return (
    <div className="home-container">
      <RandomRecipe />
      <Popular />
      <Vegetarian />
    </div>
  );
};

export default Home;
