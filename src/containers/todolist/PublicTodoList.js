import React from 'react'
import { connect } from 'react-redux'
import { addPublicTodo, updatePublicTodo, removePublicTodo, getPublicTodos } from '../../actions'
import TodoList from '../../components/todolist/TodoList';
import AddTodo from '../../components/todolist/AddTodo';
import FilterList from '../../components/todolist/FilterList'
import TodoCounter from '../../components/todolist/TodoCounter'
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
      <div className={cx('todoWrapper')}>
        <h1>Public List</h1>
        <AddTodo addTodo={this.props.addTodo} />
        <hr />

        <FilterList />
        <TodoList todos={todos} onTodoClick={this.props.onTodoClick} onRemoveTodoClick={this.props.onRemoveTodoClick} />
        <TodoCounter todos={todos} />
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
    addTodo: (data) => {
      dispatch(addPublicTodo(data));
    },
    syncTodos: () => {
      dispatch(getPublicTodos());
    },
    onTodoClick: (id, data) => {
      data.isComplete = !data.completed;
      data.key = data.id;
      delete data.id;
      delete data.completed;
      dispatch(updatePublicTodo(id, data))
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
