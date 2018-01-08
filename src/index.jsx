import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app.jsx';
import Session from './components/src/Session.jsx';
import SessionStart from './components/src/SessionStart.jsx';
import colorsMiddleware from './middleware/colors.js';
import colorsReducer from './reducers/colors.js';

const rootMiddleware = [
  colorsMiddleware,
];

const rootReducer = combineReducers({
  colors: colorsReducer,
  routing: routerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...rootMiddleware,
  ),
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SessionStart} />
        <Route path="/sessions" component={SessionStart} />
        <Route path="/sessions/:id" component={Session} />
        <Route path="/:404" component={null} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'),
);
