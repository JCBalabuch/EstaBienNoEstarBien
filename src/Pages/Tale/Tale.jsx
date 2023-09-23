import React from "react";
import './Tale.css'
import { useParams, useNavigate } from "react-router-dom";
import TaleContent from "../../components/TaleContent/TaleContent";
import { deleteTale, getTale } from "../../../Data/Data";

const Tale = () => {
  const params = useParams();
  const navigate = useNavigate();
  const tale = getTale(params.id);

  return (
    <>
      <section className="tale">
        <div>
          <TaleContent tale={tale} />
        </div>
        <button
          onClick={() => {
            deleteTale(tale.id).then(() => {
              navigate("/Tales");
            });
          }}
        >
          Ya he leído {tale.taleName} Quitar de la lista
        </button>
      </section>
    </>
  );
};

export default Tale;
