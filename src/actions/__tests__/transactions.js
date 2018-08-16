import * as actions from '../transactions';
import * as apiCalls from '../../apiCalls/transactions';
import * as constants from '../../constants';

const mockTransactions = [{
  name: 'test',
  price: 1,
  payer: 1,
  id: 1,
  participiants: [1, 2],
}];

jest.mock('../../apiCalls/transactions.js', () => ({
  getTransactions: jest.fn(() => Promise.resolve(mockTransactions)),
  getTransaction: jest.fn(() => Promise.resolve(mockTransactions[0])),
  createTransaction: jest.fn(() => Promise.resolve(mockTransactions[0])),
}));

describe('function getTransactions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  it('it should called apiCalls get transactions and dispatch action with type: GET_TRANSACTIONS and payload which we get', () => {
    actions.getTransactions(dispatch)()
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: constants.GET_USERS_TRANSACTIONS,
          payload: mockTransactions,
        });
      });
    expect(apiCalls.getTransactions).toBeCalled();
  });

  it('it should called apiCalls get transaction and dispatch action with type: GET_TRANSACTION and payload which we get', () => {
    actions.getTransaction(dispatch)(1)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: constants.GET_TRANSACTION,
          payload: mockTransactions[0],
        });
      });
    expect(apiCalls.getTransaction).toBeCalledWith(1);
  });

  it('it should called apiCalls create Transactions and dispatch action with type: CREATE_TRANSACTION and payload which we get', () => {
    const { name, price, payer, participants } = mockTransactions[0];
    actions.createTransaction(dispatch)(name, price, payer, participants)
      .then(() => {
        expect(dispatch).toBeCalledWith({
          type: constants.CREATE_TRANSACTION,
          payload: mockTransactions[0],
        });
      });
    expect(apiCalls.createTransaction).toBeCalledWith(name, price, payer, participants);
  });
});
