import React, { createContext, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const RecipeDetailsContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const { id } = useParams();
  const { API_KEY1 } = UserAuth();
  const [recipeDetail, setRecipeDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [readyInMinutes, setReadyInMinutes] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);

  const API = `https://api.spoonacular.com/recipes/${id}/information?apiKey=62bd0b953b6c4a50a3fff4e27084d94c`;

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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipeDetails(API);
  }, [id]);

  return (
    <RecipeDetailsContext.Provider
      value={{
        steps,
        ingredients,
        recipeDetail,
        setRecipeDetails,
        readyInMinutes,
        glutenFree,
        vegan,
        vegetarian,
        dairyFree,
        fetchRecipeDetails,
      }}
    >
      {children}
    </RecipeDetailsContext.Provider>
  );
};

export const useRecipeDetailsContext = () => {
  return useContext(RecipeDetailsContext);
};
