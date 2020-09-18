
const initialState = [{
  id: 1,
  todo: 'buy bread',
  done: false
}];

const newTodo = {
  id: 2,
  todo: 'something else',
  done: false
};

const action = {
  type: 'add',
  payload: newTodo
}

export const todoReducer1 = (state = initialState, action: { type: string; payload: any }) => {
  if (action.type === 'add') {
    return [...state, action.payload];
  }
  return state;
};

const todos = todoReducer1(initialState, action);




// console.log(todos);