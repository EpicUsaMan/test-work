// @flow

import type { Sources } from 'types/sources';
import type { Source } from 'types/newsApi';

type FETCH_SOURCES_SUCCESS = {
  sources: Array<Source>,
  type: 'FETCH_SOURCES_SUCCESS',
};

type FETCH_SOURCES = {
  type: 'FETCH_SOURCES',
};

type FETCH_SOURCES_ERROR = {
  type: 'FETCH_ARTICLES_ERROR',
  message: string,
};

type Action =
  | FETCH_SOURCES
  | FETCH_SOURCES_ERROR
  | FETCH_SOURCES_SUCCESS
  | Object;

const initialState: Sources = {
  values: [],
  loader: true,
};

const fetchSources: Function = (
  state: Sources = initialState,
  action: Action = {},
): Sources => {
  switch (action.type) {
    case 'FETCH_SOURCES':
      return {
        ...state,
        loader: true,
      };
    case 'FETCH_SOURCES_SUCCESS':
      return {
        ...state,
        loader: false,
        values: action.sources,
      };
    case 'FETCH_SOURCES_ERROR':
      return {
        ...state,
        loader: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default fetchSources;
