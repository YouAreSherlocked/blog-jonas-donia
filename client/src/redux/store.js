import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import states from './index'

const reducers = {
  mainState: states
};

const rootReducer = combineReducers(reducers);
const initialState = {};
const middleWare = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const getState = () => {
  if (store) {
    return store.getState();
  }

  return {};
};

export default store;
