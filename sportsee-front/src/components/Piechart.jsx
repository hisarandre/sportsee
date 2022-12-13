import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../services/useUser";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

/**
 * Return a div with the user score as a piechart
 * @returns {React.ReactElement} A component
 */

function Piechart() {
  const { id } = useParams();
  let user = useUser(id);

  const data = [
    { name: "center", value: 100, fill: "white" },
    { name: "pourcent", value: user?.todayScore * 100, fill: "red" },
  ];

  const CustomLabel = () => {
    return (
      <div className="piechart__legend">
        <p className="piechart__score">{user?.todayScore * 100}%</p>
        <p className="piechart__goal">de votre objectif</p>
      </div>
    );
  };

  return (
    <div className="piechart__container">
      <p className="piechart__title">Score</p>
      <div className="piechart__circle"></div>

      <ResponsiveContainer>
        <RadialBarChart
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0}
          outerRadius={140}
          barSize={10}
          startAngle={-270}
          endAngle={90}
          data={data}
          className="piechart"
        >
          <RadialBar background={{ fill: "#fbfbfb" }} minAngle={1} dataKey="value" cornerRadius="50%" />
          <Legend verticalAlign="middle" align="center" content={CustomLabel} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
