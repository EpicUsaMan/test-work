// @flow

export const filterFormUpdateCountry: Function = (country: string) => ({
  type: 'FILTER_FORM_UPDATE_COUNTRY',
  country,
});

export const filterFormUpdateLang: Function = (lang: string) => ({
  type: 'FILTER_FORM_UPDATE_LANG',
  lang,
});

export const filterFormUpdateCategory: Function = (category: string) => ({
  type: 'FILTER_FORM_UPDATE_CATEGORY',
  category,
});

export default {
  filterFormUpdateLang,
  filterFormUpdateCountry,
  filterFormUpdateCategory,
};
