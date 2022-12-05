import React from "react";
import Logo from "../assets/sportsee_logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="Sportsee Logo" />

      <nav className="header__links">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/" className="header__link">
          Profil
        </NavLink>
        <NavLink to="/" className="header__link">
          Réglage
        </NavLink>
        <NavLink to="/" className="header__link">
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
