import React from 'react';
import renderer from 'react-test-renderer';
import Projects from '.';

it('Projects renders correctly', () => {
    const tree = renderer.create(<Projects />).toJSON();
    expect(tree).toMatchSnapshot();
});
