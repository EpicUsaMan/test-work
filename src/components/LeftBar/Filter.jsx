// @flow

import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import filterFormActions from 'actions/filterForm';
import { CATEGORY_VALUES, LANGS_VALUES, COUNTRY_VALUES } from 'const/Select';
import styled from 'styled-components';
import type { FilterForm } from 'types/filterForm';

type propsActions = {
  filterFormUpdateLang: Function,
  filterFormUpdateCountry: Function,
  filterFormUpdateCategory: Function,
};

const Form: React$StatelessFunctionalComponent<*> = styled.form`
  width: 320px;
  height: 100vh;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledSelect: React$StatelessFunctionalComponent<*> = styled(Select)`
  margin: 20px 0;
`;

type FilterPropTypes = FilterForm & propsActions;

class Filter extends Component<FilterPropTypes> {
  render() {
    return (
      <Form>
        <StyledSelect
          options={CATEGORY_VALUES}
          value={this.props.category}
          simpleValue={true}
          onChange={this.props.filterFormUpdateCategory}
          removeSelected={true}
          multi={true}
          placeholder="Category"
        />
        <StyledSelect
          options={LANGS_VALUES}
          value={this.props.lang}
          simpleValue={true}
          onChange={this.props.filterFormUpdateLang}
          removeSelected={true}
          multi={true}
          placeholder="Lang"
        />
        <StyledSelect
          options={COUNTRY_VALUES}
          value={this.props.country}
          simpleValue={true}
          onChange={this.props.filterFormUpdateCountry}
          removeSelected={true}
          multi={true}
          placeholder="Country"
        />
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch: Function): propsActions {
  return bindActionCreators({ ...filterFormActions }, dispatch);
}

function mapStateToProps({
  filterForm,
}: {
  filterForm: FilterForm,
}): FilterForm {
  return {
    ...filterForm,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
