import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Sources from 'components/LeftBar/Sources';
import Filter from 'components/LeftBar/Filter';

export default class LeftBar extends Component<*> {
  render() {
    return (
      <Switch>
        <Route path="/:page([1-9][0-9]*)?" exact component={Filter} />
        <Route path="/:sources/:type(top|latest|popular)" component={Sources} />
      </Switch>
    );
  }
}
