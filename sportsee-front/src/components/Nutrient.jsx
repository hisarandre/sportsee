import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../services/useUser";

import CaloriesIcon from "../assets/Calories-icon.svg";
import GlucidesIcon from "../assets/Glucides-icon.svg";
import ProteinesIcon from "../assets/Proteine-icon.svg";
import LipidesIcon from "../assets/Lipides-icon.svg";

/**
 * Return 4 nutrients blocs (calories, proteins, glucides and lipids) from the user informations
 * @returns {React.ReactElement} A component
 */

function Nutrient() {
  const { id } = useParams();
  let user = useUser(id);

  const data = [];
  const names = ["Calories", "Protéines", "Glucides", "Lipides"];
  const values = [user?.calorieCount, user?.proteinCount, user?.carbohydrateCount, user?.lipidCount];
  const icons = [CaloriesIcon, ProteinesIcon, GlucidesIcon, LipidesIcon];

  for (var i = 0; i < names.length; i++) {
    data.push({
      name: names[i],
      value: values[i],
      icon: icons[i],
    });
  }

  return data.map((nutrient, index) => {
    return (
      <div className="nutrient" key={nutrient + index}>
        <img className="nutrient__icon" src={nutrient.icon} alt={`icon ${nutrient.name}`} />
        <div className="nutrient__details">
          <p className="nutrient__value">
            {nutrient.value} {nutrient.name === "Calories" ? "kCal" : "gr"}
          </p>
          <h3>{nutrient.name}</h3>
        </div>
      </div>
    );
  });
}

export default Nutrient;
