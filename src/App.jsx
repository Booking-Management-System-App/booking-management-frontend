import { useState, useEffect } from 'react'
import './App.css'
// Import axios
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Fetch data from the API
    axios.get('https://booking-management-system.azurewebsites.net/api/HttpExample')
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
