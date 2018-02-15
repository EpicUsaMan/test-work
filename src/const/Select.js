// @flow

type Option = {
  value: string,
  label: string,
};

const arrayToValues: Function = (value: string): Option => ({
  value,
  label: value,
});

export const CATEGORY_VALUES: Array<
  Option,
> = 'business,entertainment,gaming,general,music,politics,science-and-nature,sport,technology'
  .split(',')
  .map(arrayToValues);
export const LANGS_VALUES: Array<Option> = 'en,de,fr'
  .split(',')
  .map(arrayToValues);
export const COUNTRY_VALUES: Array<Option> = 'au,de,gb,in,it,us'
  .split(',')
  .map(arrayToValues);
