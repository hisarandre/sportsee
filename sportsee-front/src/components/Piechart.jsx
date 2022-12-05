import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

function Piechart({ score }) {
  const data = [
    { name: "center", value: 100, fill: "white" },
    { name: "pourcent", value: score * 100, fill: "red" },
  ];

  const CustomLabel = () => {
    return (
      <div className="piechart__legend">
        <p className="piechart__score">{score * 100}%</p>
        <p className="piechart__goal">de votre objectif</p>
      </div>
    );
  };

  return (
    <div className="piechart__container">
      <p className="piechart__title">Score</p>

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
          <RadialBar minAngle={1} dataKey="value" />
          <Legend verticalAlign="middle" align="center" content={CustomLabel} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
