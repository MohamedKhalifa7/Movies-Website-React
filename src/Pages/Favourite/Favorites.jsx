import { toggleFavorite } from "../../Redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteMovies);

  const handleRemove = (id) => {
    dispatch(toggleFavorite({ id }));
  };

  if (favorites.length === 0) {
    return (
      <Typography variant="h6" color="white" textAlign="center">
        No favorites added yet!
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        backgroundColor: "black",
        padding: "20px",
      }}
    >
      {favorites.map((movie) => (
        <Card
          key={movie.id}
          sx={{
            backgroundColor: "black",
            position: "relative",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            sx={{ borderRadius: "10px" }}
          />
          <IconButton
            onClick={() => handleRemove(movie.id)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "red",
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {movie.title}
            </Typography>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => handleRemove(movie.id)}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Favorites;
