// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwitchLink from 'components/shared/SwitchLink';
import styled from 'styled-components';

type Props = { sources: string };

const StyledHeader: React$StatelessFunctionalComponent<*> = styled.div`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  padding: 20px;
  background: #eee;

  a {
    margin: 0 20px;
  }
`;

class Header extends Component<Props> {
  render() {
    return (
      <StyledHeader>
        <SwitchLink to={`/${this.props.sources}/top`}>Top</SwitchLink>
        <SwitchLink to={`/${this.props.sources}/latest`}>Latest</SwitchLink>
        <SwitchLink to={`/${this.props.sources}/popular`}>Popular</SwitchLink>
      </StyledHeader>
    );
  }
}

function mapStateToProps(
  a: mixed,
  { match: { params: { sources } } }: { match: { params: Props } },
): Props {
  return {
    sources,
  };
}

export default connect(mapStateToProps)(Header);
