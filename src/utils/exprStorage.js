// @flow

const DEFAULT_EXPR_TIME: number = 20 * 360 * 1000;

/**
  Set item in localStorage with expired time
  wrapper on localStorage#setItem

  @param name named key in localStorage
  @param [data = {}] data to store
  @param [expr = DEFAULT_EXPR_TIME] expired time
*/
export const setItem = (
  name: string,
  data: mixed = {},
  expr: number = DEFAULT_EXPR_TIME,
) => {
  return localStorage.setItem(
    name,
    JSON.stringify({
      data,
      expr: expr + Date.now(),
    }),
  );
};

/**
  Return item from localStorage if his not expired
  wrapper on localStorage#getItem

  @param name named key in localStorage
*/
export const getItem = (name: string) => {
  try {
    const {
      expr,
      data,
    }: {
      expr: number,
      data: any,
    } = JSON.parse(localStorage.getItem(name) || '{}');

    if (expr >= +new Date()) return data;

    localStorage.removeItem(name);
  } catch (e) {
    return;
  }
};
