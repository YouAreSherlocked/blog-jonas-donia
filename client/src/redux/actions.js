import types from './types';

export const changeCurrentCountry = name => ({
  type: types.CHANGE_CURRENT_COUNTRY,
  currentCountry: name
});

export default {
  changeCurrentCountry
}