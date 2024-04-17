import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Fetch data from the API
    api.get('/HttpExample')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <>
      <div>
        {data}
      </div>
    </>
  )
}

export default App
