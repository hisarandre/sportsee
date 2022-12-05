import React from "react";
import Icon1 from "../assets/menu_icon_1.svg";
import Icon2 from "../assets/menu_icon_2.svg";
import Icon3 from "../assets/menu_icon_3.svg";
import Icon4 from "../assets/menu_icon_4.svg";

function VerticalNav() {
  return (
    <nav className="verticalNav">
      <ul className="verticalNav__links">
        <li className="verticalNav__icon">
          <img src={Icon1} alt="Méditation" />
        </li>
        <li className="verticalNav__icon">
          <img src={Icon2} alt="Natation" />
        </li>
        <li className="verticalNav__icon">
          <img src={Icon3} alt="Velo" />
        </li>
        <li className="verticalNav__icon">
          <img src={Icon4} alt="Musculation" />
        </li>
      </ul>
      <aside className="copyright">Copyright, Sportsee 2020</aside>
    </nav>
  );
}

export default VerticalNav;
