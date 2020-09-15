
export interface TodoState {
  id: number;
  desc: string;
  done: boolean;
}

type TodoAction = {
  type: string,
  payload: TodoState
}


export const todoReducer = (
  state: TodoState[] = [{
    id: 0,
    desc: '',
    done: false
  }],
  action: TodoAction) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'toggle':
      return state.map(todo => (todo.id === action.payload.id)
        ? { ...todo, done: !todo.done }
        : todo
      )
    default:
      return state;
  }
};