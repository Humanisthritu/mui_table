import React, { useEffect, useState } from "react";
import data from "../service/userData.json";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MuiTable3 = () => {
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setRows(data);
    setLoading(false);
  });

  const setRows = (res) => {
    const row = res.map((r) => {
      const rowsData = {
        id: r.id,
        firstName: r.first_name,
        lastName: r.last_name,
        email: r.email,
        gender: r.gender,
        university: r.university,
        city: r.city,
        country: r.country,
      };
      return rowsData;
    });
    setPeopleData(row);
  };
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box>
            <TableContainer>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>University</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {peopleData.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.firstName}</TableCell>
                        <TableCell>{item.lastName}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.university}</TableCell>
                        <TableCell>{item.city}</TableCell>
                        <TableCell>{item.country}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </>
  );
};

export default MuiTable3;
