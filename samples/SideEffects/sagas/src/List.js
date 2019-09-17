import React from 'react';
import { connect } from 'react-redux';
import './List.css';

const List = ({ loaded, loading, data }) => [
  loaded ? (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Area in KM^2</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, i) => (
          <tr key={i}>
            <td>{c.name}</td>
            <td>{c.areaKM2}</td>
            <td>{c.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : loading ? (
    <div>LOADING IN PROGRESS</div>
  ) : (
    <div>NO DATA LOADED</div>
  )
];

const stateToProps = state => state.data;
const ConnectedList = connect(stateToProps)(List);

export { ConnectedList as List };
