import React from 'react';
import renderer from 'react-test-renderer';
import Madlibz from '.';

it('Madlibz renders correctly', () => {
  const tree = renderer.create(<Madlibz />).toJSON();
  expect(tree).toMatchSnapshot();
});
