import React, { PropTypes } from 'react'
import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';
const cx = classNames.bind(styles);

const Todo = ({ text, completed, onClick, onRemoveTodoClick }) => (
  <li>
       <input className={cx('todoToggle')} type="checkbox" defaultChecked={completed} onClick={onClick} />
       <span className={cx('todoDetails', {'isCompleted': completed})}  dangerouslySetInnerHTML={{ __html: text }}></span>
       <a href='#' className={cx('todoDelete')} onClick={onRemoveTodoClick}>delete</a>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
