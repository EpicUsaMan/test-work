// @flow

import type { Article } from 'types/newsApi';

export type Articles = {
  values: Array<Article>,
  loader: boolean,
  errorMessage?: string,
};
