import { toggleFavorite } from "../../Redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteMovies);

  const handleRemove = (id) => {
    dispatch(toggleFavorite({ id }));
  };

  if (favorites.length === 0) {
    return (
      <div style={{ color: "white", textAlign: "center" }}>
        No favorites added yet!
      </div>
    );
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
      {favorites.map((movie) => (
        <div
          key={movie.id}
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "20px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              fontSize: "20px",
              color: "white",
              textAlign: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {movie.title}
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "auto" }}
          />
          <button
            onClick={() => handleRemove(movie.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
