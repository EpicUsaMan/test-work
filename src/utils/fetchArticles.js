// @flow

import { API_URL, ACCESS_KEY, ARTICLES_PAGE_SIZE } from 'const';
import type { Article, ResponseArticles, ResponseError } from 'types/newsApi';
import { stringify } from 'query-string';

type ParamsType = {
  sortBy?: string,
  sources: string,
  page?: number,
};

type FullResponse = ResponseArticles | ResponseError;

type FetchedResult = { totalResults: number, articles: Array<Article> };

/**
  Fetch articles from newsApi with CORSProxy

  @param sources List of sources
  @param type Sorting type
  @param offset Count of skiped articles

  @returns Count of all articles and currently fetched articles
*/
const fetchArticles: Function = async (
  sources: string,
  type: 'popular' | 'latest' | 'top',
  offset: number,
): Promise<FetchedResult> => {
  const page: number = offset / ARTICLES_PAGE_SIZE;

  var url: string = '/v2/everything',
    params: ParamsType = {
      sources,
      page: page ? page + 1 : undefined,
      apiKey: ACCESS_KEY,
    };

  switch (type) {
    case 'popular':
      params.sortBy = 'popularity';
      break;
    case 'latest':
      break;
    case 'top':
      url = '/v2/top-headlines';
      break;
  }

  var res: FullResponse = await fetch(
    `https://cors-anywhere.herokuapp.com/${API_URL}${url}?${stringify(params)}`,
  ).then(res => res.json());

  if (res.status === 'error') {
    throw new Error(res.message);
  }

  return {
    totalResults: res.totalResults,
    articles: res.articles,
  };
};

export default fetchArticles;
