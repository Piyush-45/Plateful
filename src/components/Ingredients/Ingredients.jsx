

import React, { useState } from 'react';
import './Ingredients.css';

const Ingredients = ({ ingredientsData }) => {
  const [serving, setServing] = useState(1);

  return (
    <div className="table">
      <h3 className='adjust-servings'>
       <p className="adjustServing-label">Adjust Servings</p> <input type="number" value={serving} onChange={(e) => setServing(e.target.value)} className='serving-input' />
      </h3>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Unit</th>
            <th>Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {ingredientsData?.map((item, index) => {
            const { originalName, unit, amount } = item;
            return (
              <tr key={index}>
                <td>{serving * amount}</td>
                <td>{unit}</td>
                <td>{originalName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ingredients;
