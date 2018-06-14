import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import * as actionTypes from './actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER__SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

const isLoaded = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER__START:
    case actionTypes.FETCH_USER__FAILURE:
      return false;
    case actionTypes.FETCH_USER__SUCCESS:
      return true;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  isLoaded
});

export const store = createStore(rootReducer, {
  user: null,
  isLoaded: false
}, applyMiddleware(thunkMiddleware));

store.subscribe(() =>
  console.log(store.getState())
)
