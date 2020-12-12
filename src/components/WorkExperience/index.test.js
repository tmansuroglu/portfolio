import React from 'react';
import renderer from 'react-test-renderer';
import WorkExperience from '.';

it('WorkExperience renders correctly', () => {
  const tree = renderer.create(<WorkExperience />).toJSON();
  expect(tree).toMatchSnapshot();
});
