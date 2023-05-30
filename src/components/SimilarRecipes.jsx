import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./similarrecipe.css";
import { UserAuth } from "../context/AuthContext";

const SimilarRecipes = () => {
  const { API_KEY2 } = UserAuth();
  const { id } = useParams();
  const [similarRecipes, setSimilarRecipes] = useState([]);

  const fetchSimilarRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${API_KEY2}`
      );
      const data = await response.json();
      setSimilarRecipes(data);
      //   console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSimilarRecipes();
  }, [id]);
  return (
    <div>
      {/* <h2>Similar Recipes</h2> */}
      <div className="similar_recipe_container">
        <p>
          You can check following recipes in detail by clicking on their name.
        </p>
        {similarRecipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarRecipes;
