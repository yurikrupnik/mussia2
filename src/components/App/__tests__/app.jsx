import React from 'react';
import {Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import App from '../app';
import routes from '../../routes';

// jest.mock('../../routes'); // eslint-disable-line no-undef
afterEach(cleanup);

const {
    it,
    expect,
    shallow
} = global;

it('renders <App /> component', () => {

    const tree = (
        <Router history={createBrowserHistory()}>
            <App routes={routes} />
        </Router>
    );

    render(tree);
});
