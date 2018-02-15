// @flow

import type { Articles } from 'types/articles';
import type { Article } from 'types/newsApi';

const initialState: Articles = {
  values: [],
  loader: true,
};

type FETCH_ARTICLES_SUCCESS = {
  newQuery: boolean,
  articles: Array<Article>,
  type: 'FETCH_ARTICLES_SUCCESS',
};

type FETCH_ARTICLES = {
  type: 'FETCH_ARTICLES',
};

type FETCH_ARTICLES_ERROR = {
  type: 'FETCH_ARTICLES_ERROR',
  message: string,
};

type Action =
  | FETCH_ARTICLES
  | FETCH_ARTICLES_ERROR
  | FETCH_ARTICLES_SUCCESS
  | Object;

const fetchArticles: Function = (
  state: Articles = initialState,
  action: Action = {},
): Articles => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return {
        ...state,
        loader: true,
      };
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        loader: false,
        values: action.newQuery
          ? action.articles
          : state.values.concat(action.articles),
      };
    case 'FETCH_ARTICLES_ERROR':
      return {
        ...state,
        loader: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default fetchArticles;
