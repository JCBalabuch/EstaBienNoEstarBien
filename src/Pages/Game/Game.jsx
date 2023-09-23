import React, { useState } from "react";
import "./Game.css";
import TaleDetail from "../../components/TaleDetail/TaleDetail";
import { Link } from "react-router-dom";
import { getTales } from "../../../Data/Data";

const Game = () => {
  const [selectedTale, setSelectedTale] = useState(null);

  const handleImageClick = () => {
    const randomTaleId = Math.floor(Math.random() * 16) + 1;
    setSelectedTale(randomTaleId);

    // const randomTale = getTales().find((tale) => tale.id === randomTaleId);

    // console.log(randomTale);
    console.log(randomTaleId);
  };

  return (
    <>
      <section className="game">
        <h2>Selecciona el personaje con el que te sientas identificado</h2>
        <h3>para descubrir qué cuento debes leer hoy</h3>
        <div className="gameImgs">
          <div className="divImgGame">
            <img
              src="../../../public/LaNiñaLata.jpg"
              alt="La niña lata"
              onClick={handleImageClick}
            />
          </div>
          <div className="divImgGame">
            <img
              src="../../../public/ElNiñoMáscara.jpg"
              alt="El niño máscara"
              onClick={handleImageClick}
            />
          </div>
          <div className="divImgGame">
            <img
              src="../../../public/ElNiñoCaja.jpg"
              alt="El Niño Caja"
              onClick={handleImageClick}
            />
          </div>
        </div>
        {selectedTale && (
          <div>
            <h3>El cuento seleccionado es</h3>
            <Link to={`/tale/${selectedTale}`}>
              <p>{selectedTale}</p>
              <TaleDetail tale={selectedTale} />
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Game;

//   <div>
//     <h3>El cuento seleccionado es</h3>
//     <Link to={`/tale/${selectedTale}`}>
//       <TaleDetail tale={selectedTale} />
//     </Link>
//   </div>
