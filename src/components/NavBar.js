import CartWidget from "./CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__brand">
          <NavLink className="nav__link" to="/">
            MiMarca
          </NavLink>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="nav__link" to="/categoria/celulares">
              Categoria 1
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/categoria/relojes">
              Categoria 2
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
