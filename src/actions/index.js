import { todoService } from '../services';

let nextTodoId = 1000000;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}


export const addPublicTodoSuccess = (data) => {
  return {
    type: 'ADD_PUBLIC_TODO_SUCCESS',
    data: data
  }
}

export const addPublicTodoFailure = (error) => {
  return {
    type: 'ADD_PUBLIC_TODO_FAILURE',
    error
  }
}

export const getPublicTodosRequest = () => {
  return {
    type: 'FETCH_PUBLIC_TODO_REQUEST'
  }
}

export const getPublicTodosSuccess = (data) => {
  return {
    type: 'FETCH_PUBLIC_TODO_SUCCESS',
    data: data
  }
}

export const getPublicTodosFailure = (error) => {
  return {
    type: 'FETCH_PUBLIC_TODO_FAILURE',
    error
  }
}



export function getPublicTodos() {
  return (dispatch) => {
    dispatch(getPublicTodosRequest());
    return todoService().getPublicTodos({})
    .then( (res) => {
      if (res.status === 200) {
        return dispatch(getPublicTodosSuccess(res.data));
      }
    })
    .catch( (err) => {
        return dispatch(getPublicTodosFailure({ error: 'An error occured creating todo'}));
    })
  }
}
