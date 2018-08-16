import * as constants from '../constants';

export const initialState = [];

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TRANSACTIONS:
    case constants.GET_TRANSACTIONS_ERROR:
      return state;

    case constants.GET_TRANSACTIONS_SUCCESS:
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }
};

export default transactions;
