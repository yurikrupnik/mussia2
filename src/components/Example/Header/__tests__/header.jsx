import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import Component, { Transition } from '../index';

// import routes from '../../routes';
// jest.mock('../../routes'); // eslint-disable-line no-undef
// console.log('Layout.name', Layout.name);

const {
    test,
    expect,
    shallow
} = global;

test(`render ${Component.name} Component`, () => {
    const tree = (
        <Component />
    );

    const props = {
        onChange: jest.fn(),
        value: 'asd',
        title: 'asdd'
    };

    const { rerender } = render(<Component {...props} />);
    const propsWith = {
        onChange: jest.fn(),
        title: 'asdd',
        value: 'd',
    };
    rerender(<Component {...propsWith} />);
    rerender(<Component {...propsWith} />);
});
