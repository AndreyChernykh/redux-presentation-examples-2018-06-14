import * as api from './api';
import * as actionType from './actionTypes';

export const fetchUser = () => dispatch => {
  dispatch({ type: actionType.FETCH_USER__START });

  return api.fetchUser().then(
    response => dispatch({ type: actionType.FETCH_USER__SUCCESS, payload: response }),
    error => {
      dispatch({ type: actionType.FETCH_USER__FAILURE, payload: error });
    }
  );
};