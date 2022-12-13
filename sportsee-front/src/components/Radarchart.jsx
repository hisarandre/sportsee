import React from "react";
import { useParams } from "react-router-dom";
import { usePerformance } from "../services/usePerformance";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

/**
 * Return a div with the user perfomance as a Radarchart
 * @returns {React.ReactElement} A component
 */

function Radarchart() {
  const { id } = useParams();
  let performance = usePerformance(id);

  return performance ? (
    <div className="radarchart__container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={68} cx="50%" cy="50%" data={performance.data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            dy={3}
            tickLine={false}
            tick={{
              fontSize: 12,
            }}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <p> loading...</p>
  );
}

export default Radarchart;
