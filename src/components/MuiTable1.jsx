import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const MuiTable1 = () => {
  return (
    <>
    <Box>
    <Typography variant='h2'>TABLE 1</Typography>
    <Table>
     <TableHead>
        <TableRow>
            <TableCell sx={{color: "red" , fontWeight:"bold"}}>Name</TableCell>
            <TableCell sx={{color: "red" , fontWeight:"bold"}}>Roll No.</TableCell>
            <TableCell sx={{color: "red" , fontWeight:"bold"}}>Class</TableCell>
            <TableCell sx={{color: "red" , fontWeight:"bold"}}>University</TableCell>
        </TableRow>
     </TableHead>
     <TableBody>
     <TableRow>
            <TableCell>Ritu</TableCell>
            <TableCell>55</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Ranchi University</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Sumant</TableCell>
            <TableCell>89</TableCell>
            <TableCell>12</TableCell>
            <TableCell>Surendra Nath University</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Mohit</TableCell>
            <TableCell>03</TableCell>
            <TableCell>4</TableCell>
            <TableCell>Alouis University</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>kaveri</TableCell>
            <TableCell>78</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Sarla University</TableCell>
        </TableRow>


     </TableBody>

    </Table>
        
    </Box>
      
    </>
  )
}

export default MuiTable1
