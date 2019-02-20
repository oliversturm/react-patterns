import React from 'react';
import TodoList from './TodoList';
import Other from './Other';
import NotFound from './NotFound';

const ROUTE_TODOS = 'TODOS';
const ROUTE_OTHER = 'OTHER';

const routes = {
  [ROUTE_TODOS]: '/',
  [ROUTE_OTHER]: '/other'
};

const locationMap = {
  [ROUTE_TODOS]: () => <TodoList />,
  [ROUTE_OTHER]: () => <Other />
};

const mapLocation = location => locationMap[location] || (() => <NotFound />);

export { ROUTE_TODOS, ROUTE_OTHER, routes, mapLocation };
