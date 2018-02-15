// @flow

import React, { Component } from 'react';

class NoMatch extends Component<*> {
  render() {
    return (
      <div>
        <h3>404</h3>
        <span>Такой страницы не существует</span>
      </div>
    );
  }
}

export default NoMatch;
