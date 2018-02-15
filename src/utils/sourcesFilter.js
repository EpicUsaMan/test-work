// @flow

import type { Source } from 'types/newsApi';

/**
  Convert string list to Array<String>
**/
const convertToSimple: Function = (el: string): string[] => {
  return el.length ? el.split(',') : [];
};

/**
  Generate function for filter method on Array<Source>

  @param lang List of langs
  @param category List of categorys
  @param country List of countrys
*/
const sourcesFilter: Function = (
  lang: string,
  category: string,
  country: string,
): Function => {
  let langFilter: string[] = convertToSimple(lang),
    categoryFilter: string[] = convertToSimple(category),
    countryFilter: string[] = convertToSimple(country);

  return (el: Source): boolean => {
    return (
      (!langFilter.length || !!~langFilter.indexOf(el.language)) &&
      (!categoryFilter.length || !!~categoryFilter.indexOf(el.category)) &&
      (!countryFilter.length || !!~countryFilter.indexOf(el.country))
    );
  };
};

export default sourcesFilter;
