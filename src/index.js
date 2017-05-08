import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import todoApp from './reducers'
import configureStore from './store/configureStore';


import App from 'containers/App';

import {defaultTodos} from '_data';


if(!window.__INITIAL_STATE__ || typeof window.__INITIAL_STATE__ === 'undefined') {
  window.__INITIAL_STATE__ = {
    todos: defaultTodos
  }
}

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

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
