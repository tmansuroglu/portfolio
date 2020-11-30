import React from 'react';
import renderer from 'react-test-renderer';
import Resume from '.';

it('Resume renders correctly', () => {
    const tree = renderer.create(<Resume />).toJSON();
    expect(tree).toMatchSnapshot();
});
