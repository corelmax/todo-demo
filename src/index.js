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
  return ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    // redux store has a method replaceReducer
    store.replaceReducer(appReducer);
  });

  /*
  module.hot.accept('./index.js', () => {
    console.log('Re-rendering app');
    render(App)
  })

  module.hot.accept('./containers/App', () => {
    console.log('Re-rendering app');
    render(App)
  })
  */
  module.hot.accept();
  render(App)
}
