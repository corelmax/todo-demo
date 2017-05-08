import { combineReducers } from 'redux'
import todos from './todos'
import todosPublic from './todosPublic'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
  todos,
  todosPublic,
  visibilityFilter
})

export default todoApp
