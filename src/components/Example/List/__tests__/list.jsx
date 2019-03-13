import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import Component from '../index';

// import routes from '../../routes';
// jest.mock('../../routes'); // eslint-disable-line no-undef
// console.log('Layout.name', Layout.name);

const {
    test,
} = global;

test(`render ${Component.name} Component`, () => {
    const tree = (
        <Component />
    );

    const props = {
        onSelect: jest.fn(),
        data: [
            {
                score: 123,
                show: {
                    id: 13,
                    name: 'd',
                    image: {
                        medium: 'ads'
                    }
                }
            },
            {
                score: 123,
                id: 14,
                show: {
                    name: 'dd'
                }
            }
        ]
    };

    const { rerender } = render(<Component {...props} />);
});
