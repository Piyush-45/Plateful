import React from "react";
import { useState, useEffect } from "react";
import { db } from "../context/Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import deleteIcon from "../images/deleteicon.png"

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setRecipes(doc.data()?.savedRecipes);
    });
  }, [user?.email]);

  const handleDeleteRecipe = async (recipeId) => {
    const userDoc = doc(db, "users", `${user?.email}`);
    await updateDoc(userDoc, {
      savedRecipes: recipes.filter((recipe) => recipe.id !== recipeId),
    });
  };

  return (
    <div className="recipes_container saved-recipe-container">
      {recipes.map((item) => {
        const { id, title, img } = item;
        return (
          <div key={id} className="recipe_Card">
            <Link to={`/recipe/${id}`}>
              <RecipeCard id={id}image={img} />
            </Link>
            <div className="card_footer">
              <h3 className="card_title">{title}</h3>
              <p className="delete-recipe" onClick={() => handleDeleteRecipe(id)}>
                <AiFillDelete className="delete-icon" />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default SavedRecipes;