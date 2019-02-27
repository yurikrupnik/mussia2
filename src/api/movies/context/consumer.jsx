import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
// import DataContainer from '../../dataContainer';

const MoviesConsumer = ({ render }) => (
    <Consumer>
        {props => render(props)}
    </Consumer>
);

MoviesConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default MoviesConsumer;
