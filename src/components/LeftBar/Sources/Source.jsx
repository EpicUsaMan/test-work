// @flow

import React, { Component } from 'react';
import SwitchLink from 'components/shared/SwitchLink';
import styled from 'styled-components';
import type { Source as SourceType } from 'types/newsApi';

const StyledLink: React$StatelessFunctionalComponent<*> = styled(SwitchLink)`
  display: block;
  cursor: pointer;
  margin: 8px 0;
`;

class Source extends Component<SourceType> {
  render() {
    return (
      <StyledLink to={`${this.props.id ? '/' + this.props.id : ''}/latest`}>
        {this.props.name}
      </StyledLink>
    );
  }
}

export default Source;
