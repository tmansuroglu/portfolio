import React from 'react';
import renderer from 'react-test-renderer';
import TMDB from '.';

it('TMDB renders correctly', () => {
  const tree = renderer.create(<TMDB />).toJSON();
  expect(tree).toMatchSnapshot();
});
