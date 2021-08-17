import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

export const Componente = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="card text-center">
        <div className="card-header">Movies</div>
      <div className="card-body">
        {movies.map((movie) => (
          <li className="list-group-item" key={movie.id}>{movie.id}</li>
        ))}
        <div className="card-footer">useContext Encapsulado</div>
      </div>
    </div>
  );
};
