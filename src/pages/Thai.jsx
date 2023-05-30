import React from "react";
import { useState, useEffect } from "react";
import RecipeCard, { RecipeCardBottom } from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Thai = () => {
  const API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=11&cusine=Thai`;

  const [ThaiRecipes, setThaiRecipes] = useState([]);
  const [nextPage, setNextPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const fetchThaiRecipe = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.recipes)
      // setThaiRecipes(data.recipes);
      setThaiRecipes(data.results)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreData = async () => {
    const moreRecipes = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=10&cusine=Thai&page=${nextPage}`
    );
    const data = await moreRecipes.json()
    setThaiRecipes((prevRecipes)=> [...prevRecipes, ...data.results])
    setNextPage(nextPage+1)
  };

  useEffect(() => {
    fetchThaiRecipe(API);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>; // Replace with your loading indicator component
  }

  return (
    <>
      <h1 id="popular">Thai Cuisines</h1>
      <div className="recipes_container dropdwon-recipes">
        {ThaiRecipes.map((recipe) => {
          const { id, title, image, readyInMinutes } = recipe;
          return (
            <div className="recipe_Card">
              <Link to={`/recipe/${id}`}>
                <RecipeCard
                  key={id}
                  title={title}
                  readyInMinutes={readyInMinutes}
                  image={image}
                />
              </Link>
              {/* <RecipeCardBottom
                readyInMinutes={readyInMinutes}
                id={id}
                title={title}
                image={image}
              /> */}
            </div>
          );
        })}
      </div>

      {ThaiRecipes!==null && ThaiRecipes.length >10 &&(
        <div className="load-more">
          <button onClick={fetchMoreData}> Load More</button>
        </div>
      )}
    </>
  );
};

export default Thai;
