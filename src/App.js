import react from 'react';

import BasicTable from './BasicTable';
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap"
import Pagination from './Pagination';






function App() {



  const [table, setTable] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage] = useState(30);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTable(json))
  }, [])



  const indexofLastPage = currentpage * postsperpage;
  const indexofFirstpage = indexofLastPage - postsperpage;
  const currentposts = table.slice(indexofFirstpage, indexofLastPage);
  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <>




      <BasicTable data={currentposts} />,
      <Pagination postsperpage={postsperpage} totalposts={table.length} paginate={paginate} />



    </>);
}



export default App