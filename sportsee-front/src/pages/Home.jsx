import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../services/useUser";
import { useActivity } from "../services/useActivity";
import { useAverageSession } from "../services/useAverageSession";

import WelcomeBanner from "../components/WelcomeBanner";
import Piechart from "../components/Piechart";
import Barchart from "../components/Barchart";
import Nutrient from "../components/Nutrient";
import Linechart from "../components/Linechart";

import CaloriesIcon from "../assets/Calories-icon.svg";
import GlucidesIcon from "../assets/Glucides-icon.svg";
import ProteinesIcon from "../assets/Proteine-icon.svg";
import LipidesIcon from "../assets/Lipides-icon.svg";

function Home() {
  const { id } = useParams();
  let user = useUser(id);
  let activity = useActivity(id);
  let averageSession = useAverageSession(id);

  if (user && activity && averageSession) {
    return (
      <div className="content-container">
        <WelcomeBanner firstName={user.firstName} />

        <div className="stats">
          <section className="stats__graph">
            <Barchart sessions={activity.sessions} />
            <div className="stats__graph--blocs">
              <Linechart sessions={averageSession.sessions} />
              <Piechart score={user.todayScore} />
              <Piechart score={user.todayScore} />
            </div>
          </section>
          <aside className="stats__resume">
            <Nutrient name="Calories" value={user.calorieCount} icon={CaloriesIcon} />
            <Nutrient name="Proteines" value={user.proteinCount} icon={ProteinesIcon} />
            <Nutrient name="Glucides" value={user.carbohydrateCount} icon={GlucidesIcon} />
            <Nutrient name="Lipides" value={user.lipidCount} icon={LipidesIcon} />
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
