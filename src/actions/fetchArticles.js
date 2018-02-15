// @flow
import type { Article } from 'types/newsApi';
import fetchArticlesUtil from 'utils/fetchArticles';

type LastQuery = {
  sources: string,
  type: string,
  offset: number,
  totalResults?: number,
};

let lastQuery: LastQuery;

export const fetchArticles: Function = (
  sources: string,
  type: string,
  offset: number,
) => {
  return async (dispatch: Function) => {
    if (lastQuery && lastQuery.sources == sources && lastQuery.type == type) {
      if (lastQuery.offset == offset || lastQuery.totalResults == offset)
        return;
    } else {
      offset = 0;
    }

    lastQuery = {
      sources,
      type,
      offset,
    };

    dispatch(fetchArticlesStart());

    return fetchArticlesUtil(sources, type, offset).then(
      (res: { totalResults: number, articles: Array<Article> }) => {
        lastQuery.totalResults = res.totalResults;

        return dispatch(fetchArticlesSuccess(res.articles, offset != 0));
      },
      (err: Error) => {
        return dispatch(fetchArticlesError(err.message));
      },
    );
  };
};

export const fetchArticlesStart: Function = () => ({
  type: 'FETCH_ARTICLES_START',
});

export const fetchArticlesSuccess: Function = (
  articles: Array<Article>,
  newQuery: Boolean,
) => ({
  type: 'FETCH_ARTICLES_SUCCESS',
  articles,
  newQuery,
});

export const fetchArticlesError: Function = (message: string) => ({
  type: 'FETCH_ARTICLES_ERROR',
  message,
});
