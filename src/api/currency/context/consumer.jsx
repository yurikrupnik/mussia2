import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DataContainer from '../../dataContainer';

const CurrencyConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

CurrencyConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default CurrencyConsumer;
