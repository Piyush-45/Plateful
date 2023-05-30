import React from "react";
import { useState, useEffect } from "react";
import RecipeCard, { RecipeCardBottom } from "./RecipeCard";
import heart from "../images/heart.png";
import timerequired from "../images/timerequired.png";
import { Link } from "react-router-dom";
import SimilarRecipes from "./SimilarRecipes";
import { UserAuth } from "../context/AuthContext";

const Popular = () => {
  const key1 = `62bd0b953b6c4a50a3fff4e27084d94c`;
  const key2 = ` 7d8e3d34745c4731b1da758cdad1b008`;
  const {API_KEY1, API_KEY2} = UserAuth()
  const APi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&cuisine=Irish`;

  const [popularRecipes, setPopularRecipes] = useState([]);
  const [nextPage, setNextPage] = useState(2);

  const fetchPopularRecipe = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPopularRecipes(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreData = async () => {
    const moreRecipes = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=10&cuisine=Italian&page=${nextPage}`
    );
    const data = await moreRecipes.json();
    setPopularRecipes((prevRecipes) => [...prevRecipes, ...data.results]);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    fetchPopularRecipe(APi);
  }, []);

  return (
    <>
      <h1 id="popular">Popular Picks</h1>
      <div className="popular recipes_container">
        {popularRecipes.map((item) => {
          const { id, title, image, readyInMinutes } = item;
          return (
            <div className="recipe_Card" key={id}>
              <Link to={`/recipe/${id}`}>
                <RecipeCard id={id} title={title} image={image} />
              </Link>
            </div>
          );
        })}
      </div>

      {popularRecipes !== null && popularRecipes.length >= 10 && (
        <div className="load-more">
          <button onClick={fetchMoreData}> Load More</button>
        </div>
      )}
    </>
  );
};

export default Popular;

// ! working of function more recipes
// ?This is a code snippet that defines an asynchronous function called fetchMoreData.

// ?This function sends a request to the Spoonacular API to retrieve more Italian recipes, using the fetch function. The await keyword is used to wait for the response to be received before continuing with the function's execution.

// ?Once the response is received, it is parsed as JSON using the json method, and the resulting data is stored in the data variable.

// ?Then, the setPopularRecipes function is called with a callback that takes the previous state of popularRecipes and appends the new data from data.results using the spread operator .... This updates the state of the component that called this function with the new list of recipes.

//? Finally, the setNextPage function is called to update the state of the nextPage variable by incrementing it by 1. This is used to retrieve the next page of results when the function is called again.

// ?Overall, this code is used to load more Italian recipes from the Spoonacular API as the user scrolls through a list of recipes, allowing them to see more content without having to load a new page.
