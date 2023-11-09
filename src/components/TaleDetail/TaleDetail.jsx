// import React from "react";
import './TaleDetail.css'

const TaleDetail = ({ tale }) => {

  return (
    <>
      <div className="cardTale">
        <div className="imgTale">
          <img src={tale.taleImg} alt={tale.taleName} />
        </div>
        <h3>{tale.taleName}</h3>
        <h6>{tale.episode}</h6>
      </div>
    </>
  );
};

export default TaleDetail;
