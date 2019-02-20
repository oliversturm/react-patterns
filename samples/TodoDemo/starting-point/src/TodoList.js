import React, { useState } from 'react';
import Immutable from 'seamless-immutable';
import TodoItem from './TodoItem';
import NewItemEntry from './NewItemEntry';

import './TodoList.css';

const TodoList = () => {
  // as before - the initial data can come from elsewhere as needed
  const [items, setItems] = useState(
    Immutable([
      { done: true, text: 'Come to Basta' },
      { done: false, text: 'Learn about React' }
    ])
  );

  const itemDoneChanged = (index, newDone) =>
    setItems(items.setIn([index, 'done'], newDone));
  const newItem = text => setItems(items.concat([{ done: false, text }]));

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
              doneChanged={d => itemDoneChanged(index, d)}
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
