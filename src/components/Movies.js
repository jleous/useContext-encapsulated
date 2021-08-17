import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import { Componente } from "./Componente";

export const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            {movies.map((movie) => (
              <li className="list-group-item" key={movie.id}>
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8"><Componente/></div>
      </div>
    </div>
  );
};
