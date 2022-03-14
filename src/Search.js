import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import BasicTable from "./BasicTable";

import "./App.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search" onchange={(event) => {setSearchTerm(event.target.val)}} >
       
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      
    </div>
  );
}

export default Search;