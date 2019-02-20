import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://outlier.oliversturm.com:8080/countries')
      .then(res => setData(res.data.data));
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Area in KM^2</th>
        <th>Population</th>
      </tr>
      {data &&
        data.map(c => (
          <tr>
            <td>{c.name}</td>
            <td>{c.areaKM2}</td>
            <td>{c.population}</td>
          </tr>
        ))}
    </table>
  );
};

export default App;
