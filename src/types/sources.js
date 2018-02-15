// @flow

import type { Source } from './newsApi';

export type Sources = {
  values: Array<Source>,
  loader: boolean,
  errorMessage?: string,
};
