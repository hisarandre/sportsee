import React from "react";
import ApiButton from "../components/ApiButton";
import { NavLink } from "react-router-dom";

/**
 * Show home page where you can choose if you want to connect as Cecilia or Karl
 *
 */

function Home() {
  return (
    <div className="home-container">
      <section className="usercards">
        <NavLink to={"/user/12"}>
          <div className="usercards__card">
            🙎‍♂️ <br />
            Karl
          </div>
        </NavLink>
        <NavLink to={"/user/18"}>
          <div className="usercards__card">
            🙎‍♀️ <br />
            Cecilia
          </div>
        </NavLink>
      </section>
      <ApiButton />
    </div>
  );
}

export default Home;
