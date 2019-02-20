import React from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { routes } from './routing';

const NavBar = ({ location, routeDispatch }) => (
  <div className="navbar">
    {Object.keys(routeDispatch).map((k, i) => (
      <button
        key={i}
        className={location === k ? 'current' : ''}
        onClick={routeDispatch[k]}
      >
        {k}
      </button>
    ))}
  </div>
);

const stateToProps = state => ({ location: state.location.type });
// This converts a route map of
// {
//   ONE: ...,
//   TWO: ...
// }
// into this dispatch map:
// {
//   routeDispatch: {
//     ONE: () => dispatch({ type: 'ONE' }),
//     TWO: () => dispatch({ type: 'TWO' })
//   }
// }
const dispatchToProps = dispatch => {
  const result = {
    routeDispatch: Object.keys(routes).reduce(
      (r, v) => ({ ...r, [v]: () => dispatch({ type: v }) }),
      {}
    )
  };

  console.log(JSON.stringify(result));
  return result;
};
const ConnectedNavBar = connect(
  stateToProps,
  dispatchToProps
)(React.memo(NavBar));

export default ConnectedNavBar;
