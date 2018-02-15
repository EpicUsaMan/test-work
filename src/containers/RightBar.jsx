import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import NoMatch from 'components/RightBar/NoMatch';
import Sources from 'components/RightBar/Sources';
import News from 'components/RightBar/News';

export default class RightBar extends Component<*> {
  render() {
    return (
      <Switch>
        <Route path="/:page([1-9][0-9]*)?" exact component={Sources} />
        <Route path="/:sources/:type(top|latest|popular)" component={News} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}
