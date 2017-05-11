import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../actions'
import TodoList from '../../components/todolist/TodoList';
import AddTodo from './AddTodo'
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

class PrivateTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    const {isLoading, todos} = this.props;
    const loadingAnim = (<div className={cx('loadingSection')}><img src={loadingImage} /></div>);

    if(isLoading) {
      return (loadingAnim)
    };



    return (
      <div className={cx('todoWrapper')}>
        <h1>Private List</h1>
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
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

PrivateTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateTodoList)

export default PrivateTodoList
