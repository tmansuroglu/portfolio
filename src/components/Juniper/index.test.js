import React from 'react';
import renderer from 'react-test-renderer';
import Juniper from '.';

it('Juniper renders correctly', () => {
  const tree = renderer.create(<Juniper />).toJSON();
  expect(tree).toMatchSnapshot();
});
