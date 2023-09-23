import React from "react";
import './GetCharacter.css'
import { CHARACTERS } from "../../../Data/Data";

const GetCharacters = ({ role }) => {
  const filteredCharacters = CHARACTERS.filter(
    (character) => character.role === role
  );

  return (
    <div className="getCharacters">
      <h2 className="roles">Personajes {role === "Principal" ? "Principales" : "Secundarios"}</h2>
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.name}>
            <div className="characterCard">
              <div className="characterCardImg">
                <img src={character.image} alt={character.name} />
              </div>
              <div className="characterCardDescription">
                <h3>{character.name}</h3>
                <h4>{character.description}</h4>
                <p>{character.problem}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetCharacters;
