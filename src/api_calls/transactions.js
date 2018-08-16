import { post, get } from '.';

export const getTransactions = (params = {}) => {
  const link = `/transactions/${params.id}`;
  return get(link, params);
};

