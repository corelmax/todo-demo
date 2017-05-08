import { combineReducers } from 'redux';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PUBLIC_TODO_SUCCESS':
      return {
        id: action.data.key,
        text: action.data.text,
        completed: action.data.isComplete
      }
    case 'TOGGLE_PUBLIC_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

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
          completed: todo.isComplete
        }
      })
    case 'REMOVE_PUBLIC_TODO_SUCCESS':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

const isLoading = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PUBLIC_TODO_REQUEST':
      return true;
    case 'FETCH_PUBLIC_TODO_SUCCESS':
    case 'FETCH_PUBLIC_TODO_FAILURE':
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
