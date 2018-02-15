// @flow

import type { FilterForm } from 'types/filterForm';

const initialState: FilterForm = {
  country: '',
  lang: '',
  category: '',
};

type FILTER_FORM_UPDATE_LANG = {
  type: 'FILTER_FORM_UPDATE_LANG',
  lang: string,
};

type FILTER_FORM_UPDATE_COUNTRY = {
  type: 'FILTER_FORM_UPDATE_COUNTRY',
  country: string,
};

type FILTER_FORM_UPDATE_CATEGORY = {
  type: 'FILTER_FORM_UPDATE_CATEGORY',
  category: string,
};

type Action =
  | FILTER_FORM_UPDATE_LANG
  | FILTER_FORM_UPDATE_COUNTRY
  | FILTER_FORM_UPDATE_CATEGORY
  | Object;

const filterForm: Function = (
  state: FilterForm = initialState,
  action: Action = {},
): mixed => {
  switch (action.type) {
    case 'FILTER_FORM_UPDATE_COUNTRY':
      return {
        ...state,
        country: action.country,
      };
    case 'FILTER_FORM_UPDATE_LANG':
      return {
        ...state,
        lang: action.lang,
      };
    case 'FILTER_FORM_UPDATE_CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default filterForm;
