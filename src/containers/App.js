import React from 'react'
import classNames from 'classnames/bind'
import FilterList from '../components/todolist/FilterList'
import AddTodo from './todolist/AddTodo'
import PublicTodoList from './todolist/PublicTodoList'
import PrivateTodoList from './todolist/PrivateTodoList'
import TodoApp from './todolist/TodoApp';

import styles from '../styles/layout.css';
const cx = classNames.bind(styles);

const App = () => (
  <div className={cx('container')}>
    <AddTodo />
    <hr/>
    <h1>Todo List</h1>
    <FilterList />
    <PrivateTodoList />
    <PublicTodoList />
  </div>
)

export default App
