import React from "react";
import VerticalNav from "../components/VerticalNav";
import Header from "../components/Header";
import WelcomeBanner from "../components/WelcomeBanner";
import Piechart from "../components/Piechart";
import Barchart from "../components/Barchart";
import Nutrient from "../components/Nutrient";
import Linechart from "../components/Linechart";
import Radarchart from "../components/Radarchart";

function Home() {
  return (
    <>
      <Header />
      <VerticalNav />
      <div className="content-container">
        <WelcomeBanner />

        <div className="stats">
          <section className="stats__graph">
            <Barchart />
            <div className="stats__graph--blocs">
              <Linechart />
              <Radarchart />
              <Piechart />
            </div>
          </section>
          <aside className="stats__resume">
            <Nutrient />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
