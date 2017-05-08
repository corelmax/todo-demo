import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../actions'
import TodoList from '../../components/todolist/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

const PrivateTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default PrivateTodoList
