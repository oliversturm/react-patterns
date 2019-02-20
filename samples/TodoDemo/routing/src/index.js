import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Immutable from 'seamless-immutable';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createTodoReducer } from './reducers/todoReducer';
import { Provider } from 'react-redux';
import { createRouter } from '@respond-framework/rudy';

import { routes } from './routing';

const {
  reducer: routingReducer,
  middleware: routingMiddleware,
  firstRoute
} = createRouter(routes);

const todoReducer = createTodoReducer(
  Immutable([
    { done: true, text: 'Attend Basta' },
    { done: false, text: 'Learn about React' }
  ])
);

const reducers = combineReducers({
  todos: todoReducer,
  location: routingReducer
});
const middlewares = applyMiddleware(routingMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducers, enhancers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.dispatch(firstRoute()).then(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
