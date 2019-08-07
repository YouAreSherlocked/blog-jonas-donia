import types from './types';

export const changeCountry = country => ({
  type: types.CHANGE_COUNTRY,
  country: country
});

export default {
  changeCountry
}