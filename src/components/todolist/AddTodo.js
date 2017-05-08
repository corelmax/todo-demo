import React from 'react'
import { connect } from 'react-redux'
import { addPublicTodo } from '../../actions'
import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';

const cx = classNames.bind(styles);

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        let data = {
          text: input.value,
          complete: false
        }
        console.log('Creating with data', data);
        dispatch(addPublicTodo(data))
        input.value = ''
      }}>
        <input className={cx('taskEntry')} ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
