import React, { PropTypes } from 'react'
import Todo from '../../components/todolist/Todo'

import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';

const cx = classNames.bind(styles);

const TodoList = ({ todos, onTodoClick, onRemoveTodoClick }) => (
  <ul className={cx('todolist')}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id, todo)}
        onRemoveTodoClick = { () => onRemoveTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired
}

export default TodoList
