import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import AnalyzedInstructions from "../components/AnalyzedInstructions/AnalyzedInstructions";
import Ingredients from "../components/Ingredients/Ingredients";
import SimilarRecipes from "../components/SimilarRecipes";
import NutritionWidget from "../components/NutritionWidgets/NutritionWidgets";
import { UserAuth } from "../context/AuthContext";
import RecipeDetail from "../pages/pagesStyles/RecipeDetail.css";
import { RecipeCardBottom } from "../components/RecipeCard";
import "../index.css"
const RecipeDetails = () => {
  const { id } = useParams();
  const { API_KEY2 } = UserAuth();
  const [recipeDetail, setRecipeDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [readyInMinutes, setReadyInMinutes] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [loading, setLoading] = useState(true);

  const API = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`;

  const fetchRecipeDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRecipeDetails(data);
      setSteps(data.analyzedInstructions[0]?.steps || []);
      setIngredients(data.extendedIngredients || []);
      setReadyInMinutes(data.readyInMinutes || "");
      setGlutenFree(data.glutenFree || false);
      setVegetarian(data.vegetarian || false);
      setVegan(data.vegan || false);
      setDairyFree(data.dairyFree || false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeDetails(API);
  }, [id]);

  const removeHTMLTags = (str) => {
    return str ? str.replace(/(<([^>]+)>)/gi, "").trim() : "";
  };

  const summary = removeHTMLTags(recipeDetail.summary)?.replace(/<br>/g, " ");
  const instructions = recipeDetail.instructions
    ?.split("<li>")
    .map((instruction) => {
      let modifiedInstruction = instruction.replace(/<li>/g, "");
      modifiedInstruction = modifiedInstruction.replace(/<\/li>/g, "");
      modifiedInstruction = removeHTMLTags(modifiedInstruction);
      return modifiedInstruction;
    });

  if (loading) {
    return <h1>Loading...</h1>; // Replace with your loading indicator component
  }

  return (
    <div className="recipe-detailPage">
      <div className="title-add_To_fvrt-container">
        {recipeDetail.title && (
          <p className="recipeDetailHeading">{recipeDetail.title}</p>
        )}
        <RecipeCardBottom />
      </div>
      <div className="image_basicInfo_Container">
        {recipeDetail.image && <img src={recipeDetail.image} alt="" />}
        <div className="recipe-basicInfo-box">
          <p>{readyInMinutes} Minutes</p>
          <p>{vegetarian ? "Vegetarian" : "Non-veg"}</p>
          <p>{vegan ? "Vegan" : "Non-Vegan"}</p>
          <p>{dairyFree ? "Lactose-free" : "Contains dairy"}</p>
          <p>{glutenFree ? "Gluten free" : "Contains gluten"}</p>
        </div>
      </div>

      {summary && (
        <div>
          <div className="directions_container-heading">
            <p className="summary-heading">Recipe Summary</p>
            <p className="horizontal-line"></p>
          </div>
          <p className="recipeDetail-summary">{summary}</p>
        </div>
      )}
      {ingredients && (
        <div>
          <div className="directions_container-heading">
            <p className="summary-heading">Ingredients</p>
            <p className="horizontal-line"></p>
          </div>
          <div className="ingredients_container">
            <Ingredients ingredientsData={ingredients} />
          </div>
        </div>
      )}
      {instructions && (
        <div className="directions_container">
          <div className="directions_container-heading">
            <p className="summary-heading">Directions</p>
            <p className="horizontal-line"></p>
          </div>
          <div className="directions">
            <AnalyzedInstructions id={id} steps={steps} />
          </div>
        </div>
      )}

      {/* <SimilarRecipes /> */}
    </div>
  );
};

export default RecipeDetails;
