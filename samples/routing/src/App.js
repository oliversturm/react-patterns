import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './NavBar';
import { mapLocation } from './routing';

const App = ({ location }) => (
  <div className="main">
    <NavBar />
    {mapLocation(location)()}
  </div>
);

const stateToProps = state => ({ location: state.location.type });
const ConnectedApp = connect(stateToProps)(React.memo(App));

export default ConnectedApp;
