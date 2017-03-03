import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { polyfill } from 'es6-promise'

import userReducer from './reducers/userReducers';
import Routes from './routes/Routes';

polyfill()

export const store = createStore(
  userReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
     </Provider>,
    document.getElementById('root')
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept('./routes/Routes', () => {
    render(Routes)
  });
}
