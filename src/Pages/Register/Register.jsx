import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState([]);
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const userData = { name, age, email, genre, gender };
    onRegister(userData);
    setName("");
    setAge("");
    setEmail("");
    setGenre([]);
    setGender("");
  };

  const handleMulti = (event) => {
    setGenre(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: 'url("p2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{}}>
        <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Register</h1>
        <FormControl
          sx={{
            width: 350,
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
            id="outlined-basic"
            label="Enter Your Age"
            name="Age"
            variant="filled"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            sx={{ backgroundColor: "whitesmoke" }}
            id="outlined-basic"
            label="Enter Your Email"
            name="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ backgroundColor: "whitesmoke" }}
            select
            label="Select Favorite Genre"
            variant="filled"
            value={genre}
            onChange={handleMulti}
            SelectProps={{ multiple: true }}
          >
            <MenuItem key="Animation" value="Animation">
              Animation
            </MenuItem>
            <MenuItem key="Drama" value="Drama">
              Drama
            </MenuItem>
            <MenuItem key="Action" value="Action">
              Action
            </MenuItem>
            <MenuItem key="Romance" value="Romance">
              Romance
            </MenuItem>
            <MenuItem key="Fantasy" value="Fantasy">
              Fantasy
            </MenuItem>
            <MenuItem key="Adventure" value="Adventure">
              Adventure
            </MenuItem>
            <MenuItem key="Comedy" value="Comedy">
              Comedy
            </MenuItem>
          </TextField>
          <RadioGroup
            row
            value={gender}
            onChange={handleGenderChange}
            sx={{ color: "white" }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          <Button variant="contained" onClick={handleSubmit}>
            Register
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Register;
