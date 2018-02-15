// @flow

import React, { Component } from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSources } from 'actions/fetchSources';
import Source from './Source';
import Loader from 'components/shared/Loader';
import sourcesFilter from 'utils/sourcesFilter';
import styled from 'styled-components';
import type { Sources as SourcesType } from 'types/sources';
import type { FilterForm } from 'types/filterForm';

const Nav: React$StatelessFunctionalComponent<*> = styled.nav`
  width: 320px;
  height: 100vh;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`;

type SourcePropTypes = {
  sources: SourcesType,
  fetchSources: Function,
};

class Sources extends Component<SourcePropTypes> {
  componentDidMount() {
    this.props.fetchSources();
  }

  render() {
    return (
      <Nav>
        {this.props.sources.loader ? (
          <Loader />
        ) : (
          this.props.sources.values.map(el => <Source key={el.id} {...el} />)
        )}
      </Nav>
    );
  }
}

function mapStateToProps({
  filterForm: { lang, category, country },
  sources,
}: {
  filterForm: FilterForm,
  sources: SourcesType,
}): { sources: SourcesType } {
  return {
    sources: {
      ...sources,
      values: sources.values.filter(sourcesFilter(lang, category, country)),
    },
  };
}

function mapDispatchToProps(dispatch: Function): { fetchSources: Function } {
  return bindActionCreators({ fetchSources }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
