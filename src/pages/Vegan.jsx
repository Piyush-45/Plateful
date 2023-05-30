import React from "react";
import { useState, useEffect } from "react";
import RecipeCard, { RecipeCardBottom } from "../components/RecipeCard";
import { Link } from "react-router-dom";


import { UserAuth } from "../context/AuthContext";

const VeganRecipes = () => {
  const [veganRecipes, setVeganRecipes] = useState([]);
  const [nextPage, setNextPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const { API_KEY3 } = UserAuth();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&diet=vegan`
        );
        const data = await response.json();
        setVeganRecipes(data.results);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  const fetchMoreData = async () => {
    const moreRecipes = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a&number=10&cusine=Thai&page=${nextPage}`
    );
    const data = await moreRecipes.json()
    setVeganRecipes((prevRecipes)=> [...prevRecipes, ...data.results])
    setNextPage(nextPage+1)
  };

  if (loading) {
    return <h1>Loading...</h1>; // Replace with your loading indicator component
  }
  return (
    <>
      <h1>Vegan Recipes</h1>
      <div className="recipes_container dropdwon-recipes" >
        {veganRecipes?.map((recipe) => {
            const{id, image, title, readyInMinutes} =  recipe;
         return(
            <div className="recipe_Card">
                <Link to={`/recipe/${id}`}>
                <RecipeCard
                  key={id}
                  title={title}
                  readyInMinutes={readyInMinutes}
                  image={image}
                />
                </Link>
            </div>
         ) 
        })}
      </div>
      {veganRecipes!==null && veganRecipes.length>9 &&(
        <div className="load-more">
            <button onClick={fetchMoreData}>Load More</button>
        </div>
      )}
    </>
  );
};

export default VeganRecipes;
