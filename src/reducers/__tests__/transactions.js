import reducer from '../transactions';

describe('Transactions reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const transactions = [{
    name: 'test',
    price: 1,
    payer: 1,
    participiants: [1],
    id: 1,
  }];

  it('should return initial state', () => {
    expect(
      reducer(transactions, { type: 'WHATEVER' }),
    ).toEqual(transactions);
  });

  it('should return array with new item', () => {
    expect(
      reducer(undefined, {
        type: 'CREATE_TRANSACTION',
        payload: transactions[0],
      }),
    ).toEqual(transactions);
  });

  it('should return array of transactions with received transaction', () => {
    expect(
      reducer(undefined, {
        type: 'GET_USERS_TRANSACTIONS',
        payload: transactions,
      }),
    ).toEqual(transactions);
  });

  it('should return array of transactions with received transaction if transactions has already contain', () => {
    expect(
      reducer(transactions, {
        type: 'GET_TRANSACTION',
        payload: transactions[0],
      }),
    ).toEqual(transactions);
  });
});
