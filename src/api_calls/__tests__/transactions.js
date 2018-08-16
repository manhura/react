import fetchMock from '../../../../../../.cache/typescript/2.9/node_modules/@types/fetch-mock';
import * as apiCalls from '../transactions';

const mockTransactions = [{
  name: 'test',
  price: 1,
  payer: 1,
  id: 1,
  participiants: [1, 2],
}];

describe('ApiCalls', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Should return array of obj transactions in then', () => {
    fetchMock.get('/usertransactions', JSON.stringify(mockTransactions));
    apiCalls.getTransactions()
      .then(data => expect(data).toEqual(mockTransactions));
  });

  it('Should return obj transaction with the same id in then', () => {
    const id = 1;
    fetchMock.get(`/transactions/${id}`, JSON.stringify(mockTransactions[0]));
    apiCalls.getTransaction(id)
      .then(data => expect(data).toEqual(mockTransactions[0]));
  });

  it('Should return new transaction with the same params in then', () => {
    const name = 'Test';
    const price = 1;
    const payer = 1;
    const participants = [1];
    const newTransaction = {
      name, price, payer, participants, id: 1,
    };

    fetchMock.post('/transactions', JSON.stringify(newTransaction));
    apiCalls.createTransaction(name, price, payer, participants)
      .then(data => expect(data).toEqual(newTransaction));
  });
});
