import React, { PropTypes } from 'react'
import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';
const cx = classNames.bind(styles);

const TodoCounter = ({ todos }) => (
  <div className={cx('counter')}>
    {todos.length} Todos visible
  </div>

)

TodoCounter.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoCounter;
