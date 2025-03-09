import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../Redux/store";

const Movie = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteMovies);
  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite({ id, title, poster_path }));
  };

  return (
    <div
      style={{
        flex: "1 0 18%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
        marginLeft:"20px",
        marginRight:"20px",
        marginTop:"20px",

      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          fontSize: "25px",
          color: "white",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
        <button
          onClick={handleFavoriteClick}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            backgroundColor: "blue",
            borderRadius: "50%",
            color: isFavorite ? "red" : "gray",
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <Link
        to={`/movie/${id}`}
        style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }}
      >
        <button className="bg-danger text-white">View Details</button>
      </Link>
    </div>
  );
};

export default Movie;
