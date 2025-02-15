import React from "react";
import { useParams } from "react-router-dom";
import { useAverageSession } from "../services/useAverageSession";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from "recharts";

/**
 * Return the user average session of the week in a linechart
 * @returns {React.ReactElement} A component
 */

function Linechart() {
  const { id } = useParams();
  let averageSession = useAverageSession(id);

  const data = [];
  var days = ["L", "M", "M", "J", "V", "S", "D"];

  for (var day = 0; day < averageSession?.sessions.length; day++) {
    data.push({
      day: days[day],
      sessionLength: averageSession?.sessions[day].sessionLength,
    });
  }

  //add the day before
  data.unshift({
    day: 1,
    sessionLength: averageSession?.sessions[0].sessionLength - 10,
  });
  //add the day after
  data.push({
    day: 8,
    sessionLength: averageSession?.sessions[6].sessionLength + 10,
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      if (label === 8) {
        return null;
      } else {
        return (
          <div className="linechart__tooltip">
            <p>{`${payload[0].value} min`}</p>
          </div>
        );
      }
    }
  };

  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    return <Rectangle fill="rgba(0, 0, 0, 0.1)" stroke="red" x={x} y={y} width={width} height={height} />;
  };

  return (
    <div className="linechart__container">
      <p className="linechart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 0, left: window.innerWidth > 1340 ? -30 : -24, bottom: 10 }}>
          <CartesianGrid stroke="red" strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            tick={{
              dx: window.innerWidth > 1340 ? 20 : 12,
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis dataKey="sessionLength" domain={["dataMin", "dataMax + 25"]} hide={true} />
          <Tooltip cursor={<CustomCursor height={340} />} content={<CustomTooltip />} wrapperStyle={{ outlineStyle: "none" }} />{" "}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "white",
              stroke: "rgba(255,255,255, 0.3)",
              strokeWidth: 10,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Linechart;
