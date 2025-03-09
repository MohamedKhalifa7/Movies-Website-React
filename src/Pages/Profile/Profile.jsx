import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Profile = ({ userData }) => {
  return (
    <TableContainer
      sx={{ border: 1, width: "80%", margin: "auto", marginY: 2 }}
    >
      <Table sx={{ border: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Age
            </TableCell>
            <TableCell
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Favorite Genre
            </TableCell>
            <TableCell
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              Gender
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.genre.join(", ")}</TableCell>
              <TableCell>{item.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Profile;
