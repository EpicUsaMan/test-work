// @flow

import { API_URL, ACCESS_KEY } from 'const';
import type { Source, ResponseError, ResponseSources } from 'types/newsApi';
import { getItem } from './exprStorage';
import { stringify } from 'query-string';

type FullResponse = ResponseError | ResponseSources;

/**
  Fetch sources from localStorage or from newsApi if not exist

  @returns Count of all articles and currently fetched articles
*/
const fetchSources: Function = async (): Promise<Array<Source> | void> => {
  var cache: Array<Source> | void = getItem('sources');

  if (cache !== undefined) {
    return cache;
  }

  var url: string = '/v2/sources',
    params: mixed = {
      apiKey: ACCESS_KEY,
    };

  var res: FullResponse = await fetch(
    `${API_URL}${url}?${stringify(params)}`,
  ).then(res => res.json());

  if (res.status === 'error') {
    throw new Error(res.message);
  }

  return res.sources;
};

export default fetchSources;
