import "./NavLinks.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const NavLinks = () => {
  return (
    <div>
      <nav>
        <div>
          <Menu right className="Hamburguer">
            <NavLink to="">Home</NavLink>
            <NavLink to="story">Historia</NavLink>
            <NavLink to="characters">Personajes</NavLink>
            <NavLink to="tales">Cuentos</NavLink>
            <NavLink to="game">Juego</NavLink>
          </Menu>
        </div>
        <div className="NavLinks">
            <NavLink to="">Home</NavLink>
            <NavLink to="story">Historia</NavLink>
            <NavLink to="characters">Personajes</NavLink>
            <NavLink to="tales">Cuentos</NavLink>
            <NavLink to="game">Juego</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
