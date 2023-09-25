import React, { useState } from "react";
import "./Game.css";
import { Link } from "react-router-dom";

const Game = () => {
  const [selectedTale, setSelectedTale] = useState(null);

  const handleImageClick = () => {
    const randomTaleId = Math.floor(Math.random() * 16);
    setSelectedTale(randomTaleId);
  };

  return (
    <>
      <section className="game">
        <h2>Selecciona el personaje con el que te sientas identificado</h2>
        <h3>para descubrir qué cuento debes leer hoy</h3>
        <div className="gameImgs">
          <div className="divImgGame">
            <img
              src="LaNiñaLata.jpg"
              alt="La niña lata"
              onClick={handleImageClick}
            />
          </div>
          <div className="divImgGame">
            <img
              src="ElNiñoMáscara.jpg"
              alt="El niño máscara"
              onClick={handleImageClick}
            />
          </div>
          <div className="divImgGame">
            <img
              src="ElNiñoCaja.jpg"
              alt="El Niño Caja"
              onClick={handleImageClick}
            />
          </div>
        </div>
        {selectedTale && (
          <div>
            <Link to={`/tale/${selectedTale}`} className="selectedTale">
              <button>Clica aquí para descubrir el cuento que debes leer</button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Game;