import { createContext } from "react";
import initialMovies from "../consts/initialMovies";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const movies = initialMovies;
  const data = { movies };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

/* Exports */
export { MoviesProvider };
export default MoviesContext;
