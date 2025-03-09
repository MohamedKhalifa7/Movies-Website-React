import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContextProvider";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, setMovie, getMovieById } = useContext(MoviesContext);

  useEffect(() => {
    const movie = getMovieById(id);
    setMovie(movie);
  }, [id, getMovieById, setMovie]);

  if (!movie) {
    return <div>Loading ......</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "black",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {movie.title}
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", height: "400px" }}
      />
      <p
        style={{
          fontWeight: "bold",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {movie.overview}
      </p>
      <p
        style={{
          fontWeight: "bold",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Release Date: {movie.release_date}
      </p>
      <p
        style={{
          fontWeight: "bold",
          backgroundColor: "#e0e0e0",
          padding: "10px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Rating: {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieDetails;
