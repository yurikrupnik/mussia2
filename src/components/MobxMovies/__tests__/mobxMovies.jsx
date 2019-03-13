import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
// import {Router} from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import Component, {AppState} from '../index';
import {Provider} from '../../../api/movies/context';
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

    const {getByText, getByPlaceholderText} = render(tree);
    // const input = getByPlaceholderText('Search…');
    // console.log('e', e);
    // fireEvent.change(input, { target : { value : 'oz' } });
});

test('AppState', () => {
    const state = new AppState();
    state.toggleModal();
    state.setSelected('das');
    state.setData('ds');
    state.setSearch({
        target: {
            value: 'oz'
        }
    });
    state.handleSelect({
        currentTarget: {
            dataset: {
                id: 18494
            }
        }
    });
});
