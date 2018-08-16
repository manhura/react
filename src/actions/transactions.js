import * as constants from '../constants';
import * as apiCalls from '../api_calls/transactions';

export const getTransactions = dispatch => params => {
  dispatch({
    type: constants.GET_TRANSACTIONS,
  });
  
  return apiCalls.getTransactions(params)
    .then(data => dispatch({
      type: constants.GET_TRANSACTIONS_SUCCESS,
      payload: data,
    }))
    .catch(err => dispatch({
      type: constants.GET_TRANSACTIONS_ERROR,
      payload: err,
    }));
}
 


