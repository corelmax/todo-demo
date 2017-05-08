import { combineReducers } from 'redux';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PUBLIC_TODO_SUCCESS':
      return {
        id: action.data.key,
        text: action.data.text,
        completed: action.data.isComplete,
        user: action.data.user,
        isPrivate: action.data.isPrivate || false
      }
    case 'UPDATE_PUBLIC_TODO_SUCCESS':
    case 'TOGGLE_PUBLIC_TODO':
      //console.log('Confirming an updated toggle', state.id, action.id, action);
      if (state.key !== action.id) {
        return state
      }
      let newState = {
        id: action.data.key,
        text: action.data.text,
        completed: action.data.isComplete,
        isPrivate: action.data.isPrivate || false
      };

      return Object.assign({}, state, newState)
    default:
      return state
  }
}

const todosPublic = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PUBLIC_TODO_SUCCESS':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_PUBLIC_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'FETCH_PUBLIC_TODO_SUCCESS':
      return action.data.map( (todo) => {
        return {
          id: todo.key,
          text: todo.text,
          completed: todo.isComplete,
          user: todo.user,
          isPrivate: todo.isPrivate || false
        }
      })
    case 'UPDATE_PUBLIC_TODO_SUCCESS':
      return state.map(t => todo(t, action));
    case 'REMOVE_PUBLIC_TODO_SUCCESS':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

const isLoading = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PUBLIC_TODO_REQUEST':
    case 'ADD_PUBLIC_TODO_REQUEST':
    case 'UPDATE_PUBLIC_TODO_REQUEST':
    case 'REMOVE_PUBLIC_TODO_REQUEST':
      return true;
    case 'FETCH_PUBLIC_TODO_SUCCESS':
    case 'FETCH_PUBLIC_TODO_FAILURE':
    case 'ADD_PUBLIC_TODO_SUCCESS':
    case 'ADD_PUBLIC_TODO_FAILURE':
    case 'UPDATE_PUBLIC_TODO_SUCCESS':
    case 'UPDATE_PUBLIC_TODO_FAILURE':
    case 'REMOVE_PUBLIC_TODO_SUCCESS':
    case 'REMOVE_PUBLIC_TODO_FAILURE':
      return false;
    default:
      return state;
  }
}

const todoPublicReducer = combineReducers({
  isLoading,
  todos: todosPublic
});

export default todoPublicReducer
