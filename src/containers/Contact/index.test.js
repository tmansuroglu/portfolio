import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '.';

it('Contact renders correctly', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
