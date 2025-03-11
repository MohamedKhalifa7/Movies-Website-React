import React from "react";
import {
  Box,
  Typography,
  CardActions,
  Button,
  
} from "@mui/material";

const About = () => {
  const containerStyle = {
    backgroundImage: `url("s1.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    color: "white",
  };

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2.5rem", marginBottom: "20px" }}
        >
          Welcome to MovieApp
        </Typography>

        <Typography
          variant="h3"
          sx={{ color: "chocolate", marginBottom: "20px" }}
        >
          Contact
        </Typography>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button
            href="https://web.whatsapp.com/"
            target="_blank"
            variant="contained"
            color="success"
          >
            WhatsApp
          </Button>
          <Button
            href="mailto:mohamedkhalifa4422@gmail.com"
            target="_blank"
            variant="contained"
            color="primary"
          >
            Email
          </Button>
        </CardActions>
      </Box>
    </Box>
  );
};

export default About;
