import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

import userReducer from './reducers/userReducers';
import Routes from './routes/Routes';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  userReducer,
  composeEnhancers(middleware)
);

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
