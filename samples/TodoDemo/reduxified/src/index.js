import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Immutable from 'seamless-immutable';
import { createStore, combineReducers } from 'redux';
import { createTodoReducer } from './reducers/todoReducer';
import { Provider } from 'react-redux';

const todoReducer = createTodoReducer(
  Immutable([
    { done: true, text: 'Attend Basta' },
    { done: false, text: 'Learn about React' }
  ])
);

// In a real app there would be more than one here
const reducers = combineReducers({
  todos: todoReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
