import React from 'react';
import renderer from 'react-test-renderer';
import ContactInfo from '.';

it('ContactInfo renders correctly', () => {
  const tree = renderer.create(<ContactInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
