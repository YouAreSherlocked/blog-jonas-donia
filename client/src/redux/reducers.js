import types from './types';

const initialState = {
  darkMode: false,
  country: "Switzerland"
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCH_MODE: {
      return { ...state, darkMode: action.mode };
    }
    default:
      return state;
  }
};

export default mainReducer;

