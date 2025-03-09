import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import Movie from "./Movie";
import { MoviesContext } from "../../contexts/MoviesContextProvider";

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  if (!movies) {
    return <div>Loading ......</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      {movies.map((movie) => (
        <Movie
          key={uuid()}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default Movies;
