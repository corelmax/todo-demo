import React from 'react'
import { connect } from 'react-redux'
import { togglePublicTodo, removePublicTodo, getPublicTodos } from '../../actions'
import TodoList from '../../components/todolist/TodoList';
import AddTodo from '../../components/todolist/AddTodo';

import loadingImage from '../../images/hourglass.gif'
import classNames from 'classnames/bind';
import styles from '../../styles/todolist.css';

const cx = classNames.bind(styles);

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

class PublicTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.props.syncTodos();
  }

  componentWillMount() {

  }

  render() {
    const {isLoading, todos} = this.props;
    const loadingAnim = (<div className={cx('loadingSection')}><img src={loadingImage} /></div>);

    if(isLoading) return (loadingAnim);
    return (
      <div >
        <AddTodo />
        <TodoList todos={todos} onTodoClick={this.props.onTodoClick} onRemoveTodoClick={this.props.onRemoveTodoClick} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    isLoading: state.todosPublic.isLoading,
    todos: getVisibleTodos(state.todosPublic.todos, state.visibilityFilter),

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    syncTodos: () => {
      dispatch(getPublicTodos());
    },
    onTodoClick: (id) => {
      dispatch(togglePublicTodo(id))
    },
    onRemoveTodoClick: (id) => {
      dispatch(removePublicTodo(id))
    }
  }
}

PublicTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicTodoList)

export default PublicTodoList
