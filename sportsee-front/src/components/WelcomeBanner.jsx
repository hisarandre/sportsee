import React from "react";

function WelcomeBanner({ firstName }) {
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
