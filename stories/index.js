import React from 'react';
import { Provider } from 'react-redux'
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {mount} from "enzyme";
import Button from './Button';
import Welcome from './Welcome';
import { specs, describe, it } from 'storybook-addon-specifications'
import { expect } from 'chai';


import configureStore from '../src/store/configureStore';
import TodoList from '../src/components/todolist/TodoList';
import Todo from '../src/components/todolist/Todo';
import AddTodo from '../src/components/todolist/AddTodo';
const store = configureStore();

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Todos', module)
  .add('Add new Todo', () => {
    const story = (<AddTodo dispatch={{}} prefill='Moo' />)
    return story;
  })
  .add('Todo - Complete', () => {
    const todo = {id: 1, text: 'Demo Item 1', completed: true};
    const story = (
      <Todo
        {...todo}
        onClick={() => {
          action('Click on the Todo Click')
        }}
        onRemoveTodoClick={() => {
          action('Clicked on Remove')
        }}
      />
    )

    specs(() => describe('Completed Todo', function () {
      it('Should have the text of ' + todo.text, function () {
        let output = mount(story);
        expect(output.find('span').text()).to.equal(todo.text);
      });
      it('Should be selected', function () {
        let output = mount(story);
        expect(output.find('[defaultChecked=true]').length).to.equal(1);
      });
    }));

    return story;
  })
  .add('Populated List', () => {
    const todos =  [
      {id: 1, text: 'Demo Item 1', completed: false},
      {id: 2, text: 'Demo Item 2', completed: false},
      {id: 3, text: 'Demo Item 3', completed: true},
      {id: 4, text: 'Demo Item 4', completed: false},
      {id: 5, text: 'Demo Item 5', completed: true},
    ]
    const story = (
      <TodoList
        todos={todos}
        onTodoClick={() => {
          action('Click on the Todo Click')
        }}
        onRemoveTodoClick={() => {
          action('Clicked on Remove')
        }}
      />
    )

    specs(() => describe('Has 5 items (2 selected)', function () {
      it('Should have 5 Items', function () {
        let output = mount(story);
        expect(output.find('li').length).to.equal(5);
      });
      it('Should have 2 selected Items', function () {
        let output = mount(story);
        expect(output.find('[defaultChecked=true]').length).to.equal(2);
      });
    }));

    return story;
  })
;
