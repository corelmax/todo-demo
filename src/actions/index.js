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

export const createPublicTodoRequest = () => {
  return {
    type: 'ADD_PUBLIC_TODO_REQUEST'
  }
}

export const addPublicTodoSuccess = (data) => {
  console.log('Adding new todo', data);
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

export function addPublicTodo(data) {
  return (dispatch) => {
    dispatch(createPublicTodoRequest(data));
    return todoService().createTodo({data: data})
    .then( (res) => {
      if (res.status === 201) {
        return dispatch(addPublicTodoSuccess(res.data));
      }
    })
    .catch( (err) => {
        return dispatch(addPublicTodoFailure({ error: 'An error occured creating todo'}));
    })
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

export function updatePublicTodoRequest() {
  return {
    type: 'UPDATE_PUBLIC_TODO_REQUEST'
  }
}

export function updatePublicTodoSuccess(id, data) {
  return {
    type: 'UPDATE_PUBLIC_TODO_SUCCESS',
    id,
    data
  }
}

export function updatePublicTodoFailure(error) {
  return {
    type: 'UPDATE_PUBLIC_TODO_FAILURE',
    error
  }
}

export function updatePublicTodo(id, data) {
  return (dispatch) => {
    dispatch(updatePublicTodoRequest());
    return todoService().updatePublicTodo({id, data})
    .then( (res) => {
      if (res.status === 204) {
        return dispatch(updatePublicTodoSuccess(id, data));
      }
    })
    .catch( (err) => {
        return dispatch(updatePublicTodoFailure({ error: 'An error occured updating todo'}));
    })
  }
}


export function removePublicTodoRequest() {
  return {
    type: 'REMOVE_PUBLIC_TODO_REQUEST'
  }
}

export function removePublicTodoSuccess(id) {
  return {
    type: 'REMOVE_PUBLIC_TODO_SUCCESS',
    id
  }
}

export function removePublicTodoFailure() {
  return {
    type: 'REMOVE_PUBLIC_TODO_FAILURE'
  }
}

export function removePublicTodo(id) {
  return (dispatch) => {
    dispatch(removePublicTodoRequest());
    return todoService().deletePublicTodo({id: id})
    .then( (res) => {
      if (res.status === 204) {
        return dispatch(removePublicTodoSuccess(id));
      }
    })
    .catch( (err) => {
        return dispatch(removePublicTodoFailure({ error: 'An error occured creating todo'}));
    })
  }
}
