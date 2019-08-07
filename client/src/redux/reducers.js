import types from './types';

const initialState = {
  darkMode: false,
  country: "Switzerland"
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_COUNTRY: {
      return { ...state, country: action.country };
    }
    default:
      return state;
  }
};

export default mainReducer;

