import {
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import data from "../service/userData.json";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import UserDetails4 from "./UserDetails4/UserDetails4";

const MuiTable4 = () => {
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState([]);
  const [inData, setInData] = useState();
  const [open, setOpen] = useState("");

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

  const handleClick = (userData ) => {
 
    setInData(userData);
    setOpen('hgf')
   
  };

  const handleClose = () => {
    setOpen("");
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box>
            <Dialog fullWidth open={open.length > 0} onClose={handleClose}>
              <UserDetails4 inData={inData} handleClose={() => handleClose()} />
            </Dialog>
            <TableContainer>
              <Typography variant="h4" align="center" padding={3}>
                Table 4
              </Typography>
              <Divider></Divider>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: "green" }}>
                    <TableCell sx={{ color: "white" }}>ID</TableCell>
                    <TableCell sx={{ color: "white" }}>First Name</TableCell>
                    <TableCell sx={{ color: "white" }}>Last Name</TableCell>
                    <TableCell sx={{ color: "white" }}>Email</TableCell>
                    <TableCell sx={{ color: "white" }}>Gender</TableCell>
                    <TableCell sx={{ color: "white" }}>University</TableCell>
                    <TableCell sx={{ color: "white" }}>Country</TableCell>
                    <TableCell sx={{ color: "white" }}>City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {peopleData.map((item) => {
                    return (
                      <TableRow key={item.id} onClick={() => handleClick(item)}>
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

export default MuiTable4;
