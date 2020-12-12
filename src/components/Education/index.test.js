import React from 'react';
import renderer from 'react-test-renderer';
import Education from '.';

it('Education renders correctly', () => {
  const tree = renderer.create(<Education />).toJSON();
  expect(tree).toMatchSnapshot();
});
