import React from "react";
import "./TaleContent.css";

const TaleContent = ({ tale }) => {
  return (
    <>
      <div className="taleContent">
        <div className="imgTaleContent">
          <img src={tale.taleImg} alt={tale.taleName} />
        </div>
        <div className="dataTale">
          <h3>{tale.taleName}</h3>
          <h6>{tale.episode}</h6>
          <p dangerouslySetInnerHTML={{ __html: tale.taleContent }}></p>
        </div>
      </div>
    </>
  );
};

export default TaleContent;
