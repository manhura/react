import React from 'react';
import { shallow } from 'enzyme';
import App from '../Component.jsx';

import TransactionRoute from '../../router/TransactionRoute';
import UserRoute from '../../router/UserRoute';
import FormCraeteTransactoin from '../../transactions/FormCreateTransactions';
import FormCreateUser from '../../users/FormCreateUser';
import NotLogined from '../../NotLogined';

const props = {
  isLoad: false,
  isAuth: false,
  getAuth: jest.fn(),
};

it('should render without error', () => {
  expect(shallow(<App {...props} />).exists()).toBe(true);
});

it('Should call getAuth affter component mount', () => {
  const component = shallow(<App {...props} />);

  component.instance().componentDidMount();
  expect(component.instance().props.getAuth).toBeCalled();
});

describe('Pass correct props if Auth true', () => {
  const component = shallow(<App {...props} isAuth />);

  it('Should pass correct props to route "/"', () => {
    expect(component.find('Route').filter('[path="/"]').props()).toEqual({
      path: '/',
      component: UserRoute,
      exact: true,
    });
  });

  it('Should pass correct props to route "/participiants"', () => {
    expect(component.find('Route').filter('[path="/participiants"]').props()).toEqual({
      path: '/participiants',
      component: UserRoute,
    });
  });

  it('Should pass correct props to route "/transactionslist"', () => {
    expect(component.find('Route').filter('[path="/transactionslist"]').props()).toEqual({
      path: '/transactionslist',
      component: TransactionRoute,
    });
  });

  it('Should pass correct props to route "/usersform"', () => {
    expect(component.find('Route').filter('[path="/usersform"]').props()).toEqual({
      path: '/usersform',
      component: FormCreateUser,
    });
  });

  it('Should pass correct props to route "/transactionsform"', () => {
    expect(component.find('Route').filter('[path="/transactionsform"]').props()).toEqual({
      path: '/transactionsform',
      component: FormCraeteTransactoin,
    });
  });
});

describe('Pass correct props if Auth true', () => {
  const component = shallow(<App {...props} isAuth={false} />);

  it('Should pass correct props to route "/"', () => {
    expect(component.find('Route').filter('[path="*"]').props()).toEqual({
      path: '*',
      component: NotLogined,
    });
  });
});

describe('Loading spinner', () => {
  it('Should show loading spinner', () => {
    const component = shallow(<App {...props} isLoad />);

    expect(component.find('.loading').exists()).toBeTruthy();
  });

  it('Shouldn\'t show loading spinner', () => {
    const component = shallow(<App {...props} isLoad={false} />);

    expect(component.find('.loading').exists()).toBeFalsy();
  });
});

describe('Rendering routs depending on the user auth or not', () => {
  it('Should render route: TransactionRoute, UserRoute, FormCraeteTransactoin and not render NotLogined', () => {
    const component = shallow(<App {...props} isAuth />);

    expect(component.find('Route').filter('[path="/"]').exists()).toBeTruthy();
    expect(component.find('Route').filter('[path="/participiants"]').exists()).toBeTruthy();
    expect(component.find('Route').filter('[path="/transactionslist"]').exists()).toBeTruthy();
    expect(component.find('Route').filter('[path="/transactionsform"]').exists()).toBeTruthy();
    expect(component.find('Route').filter('[path="*"]').exists()).toBeFalsy();
  });

  it('Shouldn\'t show loading spinner', () => {
    const component = shallow(<App {...props} isAuth={false} />);

    expect(component.find('Route').filter('[path="/"]').exists()).toBeFalsy();
    expect(component.find('Route').filter('[path="/participiants"]').exists()).toBeFalsy();
    expect(component.find('Route').filter('[path="/transactionslist"]').exists()).toBeFalsy();
    expect(component.find('Route').filter('[path="/transactionsform"]').exists()).toBeFalsy();
    expect(component.find('Route').filter('[path="*"]').exists()).toBeTruthy();
  });
});
