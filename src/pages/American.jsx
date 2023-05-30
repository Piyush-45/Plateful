import React from "react";
import { useState, useEffect } from "react";
import RecipeCard, { RecipeCardBottom } from "../components/RecipeCard";
import { Link } from "react-router-dom";
const American = () => {
  const API = `https://api.spoonacular.com/recipes/random?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=11&cusine=American`;

  const [americanRecipes, setAmericanRecipes] = useState([]);
  const [nextPage, setNextPage] = useState(2);

  const fetchAmericanRecipe = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.recipes);
      setAmericanRecipes(data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreData = async () => {
    const moreRecipes = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=10&cusine=American&page=${nextPage}`
    );
    const data = await moreRecipes.json();
    setAmericanRecipes((prevRecipes) => [...prevRecipes, ...data.recipes]);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    fetchAmericanRecipe(API);
  }, []);
  return (
    <>
      <h1>American Cuisines</h1>
      <div className="recipes_container dropdwon-recipes">
        {americanRecipes.map((recipe) => {
          const { id, title, image, readyInMinutes } = recipe;
          return (
            <>
              <div className="recipe_Card" key={id}>
                <Link to={`/recipe/${id}`}>
                  <RecipeCard key={id} title={title} image={image} />
                </Link>
                {/* <RecipeCardBottom
                  readyInMinutes={readyInMinutes}
                  id={id}
                  title={title}
                  image={image}
                /> */}
              </div>
            </>
          );
        })}
      </div>

      {americanRecipes !== null && americanRecipes.length > 10 && (
        <div className="load-more">
          <button onClick={fetchMoreData}> Load More</button>
        </div>
      )}
    </>
  );
};

export default American;
