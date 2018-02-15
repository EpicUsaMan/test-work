// @flow

import fetchSourcesUtil from 'utils/fetchSources';

export const fetchSourcesStart: Function = () => ({
  type: 'FETCH_SOURCES_START',
});

export const fetchSourcesSuccess: Function = (sources: mixed) => ({
  type: 'FETCH_SOURCES_SUCCESS',
  sources,
});

export const fetchSourcesError: Function = (message: string) => ({
  type: 'FETCH_SOURCES_ERROR',
  message,
});

export const fetchSources: Function = () => {
  return async (dispatch: Function) => {
    dispatch(fetchSourcesStart());

    return fetchSourcesUtil().then(
      (res: mixed) => {
        return dispatch(fetchSourcesSuccess(res));
      },
      (err: Error) => {
        return dispatch(fetchSourcesError(err.message));
      },
    );
  };
};
