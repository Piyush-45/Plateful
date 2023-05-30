import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NutritionWidget= () => {

    const{recipeId} = useParams()
    const apiKey = "62bd0b953b6c4a50a3fff4e27084d94c";
    const [nutritionWidgetUrl, setNutritionWidgetUrl] = useState("");

    useEffect(() => {
      const fetchNutritionWidget = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.png?apiKey=${apiKey}`
          );
          // Assuming the response is a Blob object
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setNutritionWidgetUrl(imageUrl);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchNutritionWidget();
    }, [recipeId]);
  
    return (
      <div>
        {nutritionWidgetUrl && (
          <img src={nutritionWidgetUrl} alt="Recipe Nutrition Label" />
        )}
      </div>
    );
  };

export default NutritionWidget;
