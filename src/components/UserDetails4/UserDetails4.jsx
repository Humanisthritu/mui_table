import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const UserDetails4 = ({ inData, handleClose }) => {
  return (
    <>
      <Box sx={{ position: "absolute", right: "10px", top: "10px" }}>
        <CancelIcon
          sx={{ width: "30px", height: "30px", cursor: "pointer" }}
          onClick={handleClose}
        />
      </Box>
      <Box
        marginTop="20px"
        marginLeft="20px"
        marginBottom="20px"
        padding="20px"
      >
        <Typography variant="h5">User Details</Typography>
      </Box>

      <Grid columns={12} spacing={2}>
        <Grid xs={12} md={4}>
          <Typography>First Name : </Typography>
          <Typography>{inData.firstName}</Typography>
        </Grid>

        <Grid xs={12} md={4}>
          <Typography>Last Name : </Typography>
          <Typography>{inData.lastName}</Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography>Email : </Typography>
          <Typography>{inData.email}</Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography>Gender : </Typography>
          <Typography>{inData.gender}</Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography>University :</Typography>
          <Typography>{inData.university}</Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography>City :</Typography>
          <Typography>{inData.City}</Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography>Country :</Typography>
          <Typography>{inData.Country}</Typography>
        </Grid>
      </Grid>

    </>
  );
};

export default UserDetails4;
