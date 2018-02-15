// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSources } from 'actions/fetchSources';
import Loader from 'components/shared/Loader';
import Footer from 'components/RightBar/Footer';
import Source from './Source';
import sourcesFilter from 'utils/sourcesFilter';
import { SOURCES_PAGE_SIZE } from 'const';
import styled from 'styled-components';
import type { Sources as SourcesType } from 'types/sources';
import type { Source as SourceType } from 'types/newsApi';
import type { FilterForm } from 'types/filterForm';

const SourceContainer: React$StatelessFunctionalComponent<*> = styled.div`
  display: flex;
  height: calc(100vh - 48px);
  flex-wrap: wrap;
  padding-top: 20px;
  box-sizing: border-box;
`;

const PageContainer: React$StatelessFunctionalComponent<*> = styled.div`
  width: calc(100vw - 320px);
`;

type PropsActions = { fetchSources: Function };
type Props = SourcesType & { match: Object };
type BoundProps = Props & PropsActions;

class Sources extends Component<BoundProps> {
  componentDidMount() {
    this.props.fetchSources();
  }

  render() {
    return (
      <PageContainer>
        <SourceContainer>
          {this.props.loader ? (
            <Loader />
          ) : (
            this.props.values.map((source: SourceType) => (
              <Source key={source.id} {...source} />
            ))
          )}
        </SourceContainer>
        <Footer match={this.props.match} />
      </PageContainer>
    );
  }
}

function mapStateToProps(
  {
    sources: { values, loader },
    filterForm: { lang, country, category },
  }: { filterForm: FilterForm, sources: SourcesType },
  { match }: { match: { params: { page: number } } },
): Props {
  const offset: number = SOURCES_PAGE_SIZE * parseInt(match.params.page || 1);

  return {
    values: values
      .filter(sourcesFilter(lang, category, country))
      .slice(offset, offset + SOURCES_PAGE_SIZE),
    loader,
    match,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return bindActionCreators({ fetchSources }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
