import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import todoApp from './reducers'

import App from 'containers/App';

import {defaultTodos} from '_data';


if(!window.initial_data || typeof window.initial_data === 'undefined') {
  window.initial_data = {
    todos: defaultTodos
  }
}

let store = createStore(todoApp, window.initial_data)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  // Hot reloading - root module can manage depencies container within for hot reloading
  module.hot.accept('./containers/App', () => { render(App) })
}
