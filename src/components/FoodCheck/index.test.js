import React from 'react';
import renderer from 'react-test-renderer';
import Foodcheck from '.';

it('Foodcheck renders correctly', () => {
  const tree = renderer.create(<Foodcheck />).toJSON();
  expect(tree).toMatchSnapshot();
});
