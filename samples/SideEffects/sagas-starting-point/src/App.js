import React from 'react';
import './App.css';
import { List } from './List';
import { connect } from 'react-redux';
import { loadData } from './reducers/dataReducer';

const App = ({ startLoading }) => (
  <div>
    <button onClick={() => startLoading()}>Load Data</button>
    <List />
  </div>
);

const stateToProps = state => state;
const dispatchToProps = dispatch => ({
  startLoading: () => dispatch(loadData())
});
const ConnectedApp = connect(
  stateToProps,
  dispatchToProps
)(App);

export { ConnectedApp as App };
