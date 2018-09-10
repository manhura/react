import React from 'react';

import renderer from 'react-test-renderer';

import DefaultPage from './DefaultPage';

it('renders correctly', () => {
  const tree = renderer
    .create(<DefaultPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});