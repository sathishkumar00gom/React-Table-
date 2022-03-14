import react from 'react';

import BasicTable from './BasicTable';
import { useState, useEffect } from 'react';






function App() {



  const [table, setTable] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTable(json))
  }, [])



  return (
    <>



      
      <BasicTable data={table} />,





    </>);
}



export default App