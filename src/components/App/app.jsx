import React from 'react';
import Providers from './providers';
import { Provider } from '../contexts/themes/index';
import apiProviders from '../../api/providers';
import Layout from './layout';
import routes from '../routes';

const App = () => (
    <Providers providers={apiProviders.concat(Provider)}>
        <Layout routes={routes} />
    </Providers>
);

export default App;
