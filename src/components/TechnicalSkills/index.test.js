import React from 'react';
import renderer from 'react-test-renderer';
import TechnicalSkills from '.';

it('TechnicalSkills renders correctly', () => {
  const tree = renderer.create(<TechnicalSkills />).toJSON();
  expect(tree).toMatchSnapshot();
});
