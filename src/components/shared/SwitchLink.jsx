// @flow

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

type PropTypes = {
  to: string,
  exact?: boolean,
  strict?: boolean,
  disabled?: boolean,
  location?: mixed,
  activeStyle?: Object,
  style?: Object,
  isActive?: Function,
  'aria-current': 'page' | 'step' | 'location' | 'date' | 'time' | 'true',
};

class SwitchLink extends Component<PropTypes> {
  static defaultProps = {
    'aria-current': 'true',
  };

  render() {
    const {
      to,
      exact,
      strict,
      location,
      activeStyle,
      style,
      'aria-current': ariaCurrent,
      isActive: getIsActive,
      disabled,
      ...rest
    } = this.props;

    const escapedPath = to.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

    return (
      <Route
        path={escapedPath}
        exact={exact}
        strict={strict}
        location={location}
        children={({ location, match }) => {
          const isActive =
            !!(getIsActive ? getIsActive(match, location) : match) || disabled;

          return isActive ? (
            <span
              style={{ ...style, ...activeStyle }}
              aria-current={ariaCurrent || null}
              {...rest}
            />
          ) : (
            <Link to={to} style={style} {...rest} />
          );
        }}
      />
    );
  }
}

export default SwitchLink;
