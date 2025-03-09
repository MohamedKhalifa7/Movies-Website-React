import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  const getMovieById = (id) => {
    return movies ? movies.find((movie) => movie.id === Number(id)) : null;
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovie, movie, getMovieById }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
