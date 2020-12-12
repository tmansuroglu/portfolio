import React from 'react';
import renderer from 'react-test-renderer';
import WhoIsTarkan from '.';

it('WhoIsTarkan renders correctly', () => {
  const tree = renderer.create(<WhoIsTarkan />).toJSON();
  expect(tree).toMatchSnapshot();
});
