import React, { useCallback } from 'react';
import TodoItem from './TodoItem';
import NewItemEntry from './NewItemEntry';

import { changeDone, addTodo } from './reducers/todoReducer';
import { useSelector, useDispatch } from 'react-redux';

import './TodoList.css';

const TodoList = () => {
  const items = useSelector(({ todos }) => todos);

  const dispatch = useDispatch();
  const itemDoneChanged = useCallback(
    (index, newDone) => dispatch(changeDone(index, newDone)),
    [dispatch]
  );
  const newItem = useCallback((text) => dispatch(addTodo(text)), [dispatch]);

  return (
    <div className="list-frame">
      <fieldset>
        <legend>Todo List</legend>
        <div>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              done={item.done}
              text={item.text}
              doneChanged={(d) => itemDoneChanged(index, d)}
            />
          ))}
        </div>
        <div>
          <NewItemEntry onNewItem={newItem} />
        </div>
      </fieldset>
    </div>
  );
};

export default React.memo(TodoList);
