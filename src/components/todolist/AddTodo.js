import React from 'react'
import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';

const cx = classNames.bind(styles);


const AddTodo = ({addTodo}) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        let data = {
          text: input.value,
          complete: false,
          isPrivate: false
        }
        addTodo(data);
        input.value = ''
      }}>
        <input className={cx('todoEntry')} ref={node => {
          input = node
        }} />
        <button className={cx('todoAddBtn')} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;
