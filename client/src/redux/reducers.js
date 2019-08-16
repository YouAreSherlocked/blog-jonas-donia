import types from './types';

const initialState = {
  currentCountry: ""
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_COUNTRY: {
      return { ...state, currentCountry: action.currentCountry };
    }
    default:
      return state;
  }
};

export default mainReducer;

