import React from "react";
import "./Tales.css";
import { getTales } from "../../../Data/Data";
import TaleDetail from "../../components/TaleDetail/TaleDetail";
import { Link, Outlet } from "react-router-dom";

const Tales = () => {
  const tales = getTales();

  return (
    <>
      <section className="talesSection">
        <h2>Todos los cuentos de la serie</h2>
        <ul className="galleryTales">
          {tales.map((tale) => (
            <li key={tale.id}>
              <Link to={`/tale/${tale.id}`}>
                <TaleDetail tale={tale} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Tales;
