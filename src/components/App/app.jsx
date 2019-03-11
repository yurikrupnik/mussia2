import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import Providers from './providers';
// import { Provider } from '../contexts/themes/index';
import apiProviders from '../../api/providers';
import Layout from './layout';
import routes from '../routes';

const App = () => (
    <Provider store={configureStore({})}>
        <Providers providers={apiProviders}>
            <Layout routes={routes} />
        </Providers>
    </Provider>
);

export default App;
