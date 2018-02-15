import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, history } from 'store';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

export default class App extends Component<*> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <LeftBar />
            <RightBar />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
