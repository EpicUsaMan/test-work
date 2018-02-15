import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import {
  routerReducer,
  routerMiddleware,
  syncHistoryWithStore,
} from 'react-router-redux';
import * as reducers from 'reducers';

const browserHistory = createBrowserHistory();

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  applyMiddleware(thunk, routerMiddleware(browserHistory)),
);

export const history = syncHistoryWithStore(browserHistory, store);
