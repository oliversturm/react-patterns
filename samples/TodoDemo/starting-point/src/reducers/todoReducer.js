const CHANGE_DONE = 'CHANGE_DONE';
const ADD_TODO = 'ADD_TODO';

const changeDone = (index, newDone) => ({
  type: CHANGE_DONE,
  payload: { index, done: newDone },
});

const addTodo = (text) => ({ type: ADD_TODO, payload: { text } });

const createTodoReducer = (initialState) => (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DONE:
      return state.setIn([action.payload.index, 'done'], action.payload.done);

    case ADD_TODO:
      return state.concat({ done: false, text: action.payload.text });
    default:
      return state;
  }
};

export { CHANGE_DONE, ADD_TODO, changeDone, addTodo, createTodoReducer };
