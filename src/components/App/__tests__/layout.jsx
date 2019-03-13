import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from '../layout';
import routes from '../../routes';

const {
    test,
    expect,
    shallow
} = global;

test(`render ${Layout.name} Component`, () => {
    const tree = (
        <Router history={createBrowserHistory()}>
            <Layout routes={routes} />
        </Router>
    );

    render(tree);
});
