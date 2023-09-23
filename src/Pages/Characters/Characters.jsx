import React from "react";
import './Characters.css'
import GetCharacters from "../../components/GetCharacters/GetCharacters";

const Characters = () => {
  return (
    <>
      <div className="characters">
        <GetCharacters role="Principal" />
        <GetCharacters role="Secundario" />
      </div>
    </>
  );
};

export default Characters;
