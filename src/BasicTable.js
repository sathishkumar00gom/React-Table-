import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import App from './App';

function BasicTable(props) {





  const [searchTerm, setSearchTerm] = useState("")

  return (
    <><div className="main">
      <h1>React Search</h1>
      <div className="search" >

        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

      </div>

    </div><TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UserId</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">title</TableCell>
              <TableCell align="right">completed</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.filter((val) => {


              if (searchTerm === "") {
                return true;
              }
              else if (val.title.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                return true;
              }


            }

            )



              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.completed}</TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer></>
  );
}

export default BasicTable;
