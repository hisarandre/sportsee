import React from "react";

function Nutrient({ name, value, icon }) {
  return (
    <div className="nutrient">
      <img className="nutrient__icon" src={icon} alt={`icon ${name}`} />
      <div className="nutrient__details">
        <p className="nutrient__value">
          {value} {name === "Calories" ? "kCal" : "gr"}
        </p>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Nutrient;
