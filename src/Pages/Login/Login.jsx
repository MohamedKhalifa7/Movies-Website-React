import React, { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: 'url("s1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ marginTop: "-50px" }}>
        <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Login</h1>
        <FormControl
          sx={{
            width: 400,
            padding: 5,
            gap: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: 0,
          }}
        >
          <TextField
            sx={{ backgroundColor: "whitesmoke" }}
            id="outlined-basic"
            label="Enter Your Name"
            name="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ backgroundColor: "whitesmoke" }}
            id="outlined-password"
            label="Enter Your Password"
            name="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
