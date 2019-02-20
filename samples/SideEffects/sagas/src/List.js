import React from 'react';
import { connect } from 'react-redux';
import './List.css';

const List = ({ loaded, loading, data }) => [
  loaded ? (
    <table>
      <tr>
        <th>Name</th>
        <th>Area in KM^2</th>
        <th>Population</th>
      </tr>
      {data.map(c => (
        <tr>
          <td>{c.name}</td>
          <td>{c.areaKM2}</td>
          <td>{c.population}</td>
        </tr>
      ))}
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
