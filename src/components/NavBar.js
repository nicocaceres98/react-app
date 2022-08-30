import CartWidget from "./CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="topnav">
        <div className="nav__brand">
          <NavLink className="nav__link" to="/">
            MiMarca
          </NavLink>
        </div>
        <ul className="menu">
          <li>
            <NavLink className="nav__link" to="/categoria/celulares">
              Celulares
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/categoria/relojes">
              Relojes
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="cart">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
