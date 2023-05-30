import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { RecipeCardBottom } from "../components/RecipeCard";
import { Link } from "react-router-dom";
const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  
  const API_KEY = "2af405af41b84ff6a4b8f0cea79b1c5a";

  const fetchResult = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${search}`
      );
      const data = await response.json();
      setSearchedRecipes(data.results);
      setLoading(false)
      // console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResult();
  }, [search]);

  if (loading) {
    return <h1>Loading...</h1>; // Replace with your loading indicator component
  }

  return (
    <>
      <h1>Showing result for {search} </h1>
      <div className="recipes_container searched-container" >
        {searchedRecipes.length > 0 ? (
          searchedRecipes.map((item) => {
            const { id, title, image } = item;
            return (
              <>
                <div className="recipe_Card" key={id
                }>
                  <Link to={`/recipe/${id}`}>
                    <RecipeCard key={id} title={title} image={image} />
                  </Link>
               
                </div>
              </>
            );
          })
        ):(<h3>No Recipes Found</h3> )}
      </div>
    </>
  );
};

export default Searched;
