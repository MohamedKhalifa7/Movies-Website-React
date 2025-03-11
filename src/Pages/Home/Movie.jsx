import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../Redux/store";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Movie = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteMovies);
  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite({ id, title, poster_path }));
  };

  return (
    <Card
      sx={{
        flex: "1 0 15%",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
        }}
      >
        <IconButton onClick={handleFavoriteClick} sx={{ color: "red" }}>
          {isFavorite ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "gray" }} />
          )}
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        // height="100"

        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        sx={{ borderRadius: "10px" }}
      />
      <CardContent sx={{ backgroundColor: "black" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Link to={`/movie/${id}`} sx={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary" fullWidth>
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Movie;
