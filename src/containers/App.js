import React from 'react'
import classNames from 'classnames/bind'
import FilterList from 'components/todolist/FilterList'
import AddTodo from 'containers/todolist/AddTodo'
import VisibleTodoList from 'containers/todolist/VisibleTodoList'
import TodoApp from 'containers/todolist/TodoApp';

import styles from 'styles/layout.css';
const cx = classNames.bind(styles);

const App = () => (
  <div className={cx('container')}>
    <div className={cx('left-cell')}>
      <TodoApp />
    </div>
    <div className={cx('right-cell')}>
      <AddTodo />
      <hr/>
      <h1>Todo List</h1>
      <FilterList />
      <VisibleTodoList />
    </div>
  </div>
)

export default App
