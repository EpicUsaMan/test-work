// @flow

export type Source = {
  category?: string,
  language?: string,
  country?: string,
  url?: string,
  description?: string,
  name: string,
  id?: string,
};

export type Article = {
  source: Source,
  author?: string,
  title: string,
  description: string,
  url: string,
  urlToImage?: string,
  publishedAt: string,
};

type Response = {
  status: 'ok',
};

export type ResponseError = {
  status: 'error',
  message: string,
};

export type ResponseArticles = Response & {
  totalResults: number,
  articles: Array<Article>,
};

export type ResponseSources = Response & {
  sources: Array<Source>,
};
