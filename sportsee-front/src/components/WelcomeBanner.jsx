import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../services/useUser";

/**
 * Return a div with a welcome message and the name of the user
 * @returns {React.ReactElement} A component
 */

function WelcomeBanner() {
  const { id } = useParams();
  let user = useUser(id);

  let firstName = user ? user.firstName : "inconnu";

  return (
    <header className="welcome">
      <h1>
        Bonjour <span className="welcome__name">{firstName}</span>
      </h1>
      <p className="welcome__congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

export default WelcomeBanner;
