import React from "react";
import { useState, useEffect } from "react";
import RecipeCard, { RecipeCardBottom } from "../components/RecipeCard";
import { Link } from "react-router-dom";
const Italian = () => {
  const API = `https://api.spoonacular.com/recipes/complexSearch?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=11&cusine=Italian`;

  const [italianRecipes, setItalianRecipes] = useState([]);
  const[nextPage, setNextPage] = useState(2)

  const fetchAmericanRecipe = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.recipes)
      // setItalianRecipes(data.recipes);
      setItalianRecipes(data.results)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreData = async () => {
    const moreRecipes = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=10&cusine=Italian&page=${nextPage}`
    );
    const data = await moreRecipes.json()
    setItalianRecipes((prevRecipes)=> [...prevRecipes, ...data.results])
    setNextPage(nextPage+1)
  };
 

  useEffect(() => {
    fetchAmericanRecipe(API);
  }, []);
  return (
    <>
      <h1 id="popular">Italian Cuisines</h1>
      <div className="recipes_container dropdwon-recipes">
        {italianRecipes.map((recipe) => {
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

      {italianRecipes !==null && italianRecipes.length >10 &&(
        <div className="load-more">
          <button onClick={fetchMoreData}> Load More</button>
        </div>
      )}
    </>
  );
};

export default Italian;
