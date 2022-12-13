import React from "react";
import { useParams } from "react-router-dom";
import useActivity from "../services/useActivity";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

/**
 * Return the user activity in a barchart
 * @returns {React.ReactElement} A component
 */

function Barchart() {
  const { id } = useParams();
  let activity = useActivity(id);

  const data = [];

  for (var day = 0; day < activity?.sessions.length; day++) {
    data.push({
      day: day + 1,
      kilogram: activity?.sessions[day].kilogram,
      calories: activity?.sessions[day].calories,
    });
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart__tooltip">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
  };

  return (
    <div className="barchart__container">
      <p className="barchart__title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          margin={{
            top: 0,
            right: 15,
            left: 0,
            bottom: 15,
          }}
          data={data}
          barSize={9}
          barGap={9}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis tick={{ fontSize: 14, fontWeight: 500 }} stroke="#9B9EAC" dataKey="day" tickMargin={30} tickSize={0} />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin-2", "dataMax+1"]}
            tick={{ fontSize: 14, fontWeight: 500 }}
            stroke="#9B9EAC"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tickCount={3}
          />
          <YAxis yAxisId="calories" domain={[0, "dataMax + 100"]} dataKey="calories" hide={true} />
          <Tooltip
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
            content={<CustomTooltip />}
            wrapperStyle={{ outlineStyle: "none" }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            formatter={(value, entry, index) => <span className="barchart__legend">{value}</span>}
            height={70}
            verticalAlign="top"
            align="right"
            iconSize={8}
            iconType={"circle"}
          />
          <Bar yAxisId="kg" name="Poids (kg)" dataKey="kilogram" fill="#282d30" radius={[5, 5, 0, 0]} />
          <Bar yAxisId="calories" name="Calories brûlées (kCal)" dataKey="calories" fill="#e60000" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
