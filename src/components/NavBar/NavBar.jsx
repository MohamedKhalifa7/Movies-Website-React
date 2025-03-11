import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const NavBar = () => {
  const favoriteCount = useSelector((state) => state.favoriteMovies.length);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          MovieApp
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/profile"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Profile
          </Button>
          <Button
            component={Link}
            to="/favorite"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Favorite {favoriteCount > 0 && `(${favoriteCount})`}
          </Button>
          <Button
            component={Link}
            to="/login"
            sx={{ color: "white", fontWeight: "bold", backgroundColor: "blue" }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "green",
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
