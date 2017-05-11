import React from 'react'
import classNames from 'classnames/bind'
import PublicTodoList from './todolist/PublicTodoList'
import PrivateTodoList from './todolist/PrivateTodoList'
import TodoApp from './todolist/TodoApp';

import styles from '../styles/layout.css';
const cx = classNames.bind(styles);

const App = () => (
  <div className={cx('container')}>
    <div className={cx('left-col')}>
      <PrivateTodoList />
    </div>
    <div className={cx('right-col')}>
      <PublicTodoList />
    </div>
  </div>
)

export default App
