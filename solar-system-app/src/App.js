import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://hubblesite.org/api/v3/images')
    .then(res => {
      console.log(res)
    })
    .catch(error => console.log(error.response))

  }, [])

  return (
    <div className="App">
      <h1>Solar System App</h1>
    </div>
  );
}

export default App;
