// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import Loader from 'components/shared/Loader';
import sourcesFilter from 'utils/sourcesFilter';
import type { FilterForm } from 'types/filterForm';
import type { Source } from 'types/newsApi';
import { SOURCES_PAGE_SIZE } from 'const';
import type { Sources } from 'types/sources';
import styled from 'styled-components';

const StyledFooter: React$StatelessFunctionalComponent<*> = styled.nav`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;

  a,span {
    margin: 0 12px;
    border-radius: 50%;
    display: block;
    cursor: pointer;
    width: 32px;
    height: 32px;
    float: left;
    box-sizing: border-box;
    text-align: center;
    line-height: 32px;
    text-decoration: none;d
  }

  a {
    border: 1px solid #eee;
  }

  span {
    background: blue;
    color: #FFF;
  }
`;

type FooterProp = {
  loader: boolean,
  pages: number,
  selected: number,
};

class Footer extends Component<FooterProp> {
  render() {
    return (
      <StyledFooter>
        {this.props.loader ? (
          <Loader />
        ) : (
          <Pagination
            selected={this.props.selected}
            pageRangeDisplayed={6}
            marginPagesDisplayed={3}
            pageCount={this.props.pages}
          />
        )}
      </StyledFooter>
    );
  }
}

function mapStateToProps(
  {
    filterForm: { lang, category, country },
    sources: { values, loader },
  }: {
    filterForm: FilterForm,
    sources: Sources,
  },
  { match: { params: { page } } }: { match: { params: { page: number } } },
): FooterProp {
  return {
    loader,
    pages:
      values.filter(sourcesFilter(lang, category, country)).length /
        SOURCES_PAGE_SIZE -
      1,
    selected: parseInt(page || 1),
  };
}

export default connect(mapStateToProps)(Footer);
