import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://outlier.oliversturm.com:8080/countries')
      .then(res => res.json())
      .then(res => setData(res.data));
  }, [setData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Area in KM^2</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.areaKM2}</td>
              <td>{c.population}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default App;
