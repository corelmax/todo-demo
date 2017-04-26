import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ReactDom from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import { createStore } from 'redux'
import todoApp from '../src/reducers'
import VisibleTodoList from '../src/containers/todolist/VisibleTodoList';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import {defaultTodos} from '../src/_data';

let store = createStore(todoApp, {
  todos: defaultTodos
})


describe("Todolist", function() {
  it('Mount 5 Todo Items, 2 being completed', () => {
    const wrapper = mount(<VisibleTodoList store={store}/>);
    expect(wrapper.find('li').length).to.equal(5);
    expect(wrapper.find('span.todoDetails.isCompleted').length).to.equal(2);
  })
});
