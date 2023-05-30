import React from "react";
import { useState, useEffect } from "react";
import "./analyazed.css"
import '../../index.css'
const AnalyzedInstructions = ({id, steps}) => {
  console.log(steps)
  // const ApiRequest = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=2af405af41b84ff6a4b8f0cea79b1c5a`;

  // const [analyzedInstructions, setAnalyzedInstructions] = useState([]);

  // const fetchInstructions = async () => {
  //   try {
  //     const response = await fetch(ApiRequest);
  //     const data = await response.json();
  //     const steps = data.length > 0 ? data[0].steps : [];

  //     setAnalyzedInstructions(steps);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchInstructions();
  // }, []);

  return (
    <div>

      {steps.map((step, index) => (
       <li key={id}> <p key={index} className="li"> <span className="step_number">{step.number}</span> {step.step}</p></li>

      ))}
    </div>
  );
};

export default AnalyzedInstructions;
