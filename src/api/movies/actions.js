// import {received_error} from '../../redux/errors/actions';
// import {handleHostAndPrefix} from '../utils';
import {url, selector} from './config';
import api from './api';
import axios from 'axios';
// import {normalize, schema} from 'normalizr';

import createLoading from '../../redux/api/Loader/actions';
const loading = createLoading(selector);

const FETCH = 'FETCH';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';
const CREATE = 'CREATE';


const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';



export const SET_SEARCH = 'SET_SEARCH';
export const SET_SELECTED = 'SET_SELECTED';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const FETCH_SHOWS_PENDING = `${FETCH}_${selector}_${PENDING}`;
export const FETCH_SHOWS_SUCCESS = `${FETCH}_${selector}_${SUCCESS}`;


export const FETCH_SHOWS_INFO_PENDING = `${FETCH}_${selector}_INFO_${PENDING}`;
export const FETCH_SHOWS_INFO_SUCCESS = `${FETCH}_${selector}_INFO_${SUCCESS}`;


// async action
const fetchShows = query => dispatch => {
    // dispatch(loading.toggle());
    api.fetch(query)
        .then(res => {
            // dispatch(loading.toggle());
            dispatch({type: FETCH_SHOWS_SUCCESS, payload: res});
        });
};

const fetchShowById = params => dispatch => {
    dispatch({type: FETCH_SHOWS_INFO_PENDING, payload: params});
    dispatch(loading.toggle());
    console.log('fetchShowById');

    // return axios({
    //     method: 'get',
    //     url: `${handleHostAndPrefix()}${url}s`
    // })
    //     .then(res => { // handle normalize
    //         // const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
    //         // const userListSchema = new schema.Array(userSchema);
    //         // return normalize(res.data, userListSchema);
    //     })
    //     .then(res => {
    //         dispatch({
    //             type: CREATE_USERS_SUCCESS, payload: res
    //         });
    //         dispatch(loading.toggle());
    //         return res;
    //     })
    //     .catch(received_error(dispatch));
};

const setSearch = event => dispatch => {
    const { value } = event.target;
    dispatch({type: SET_SEARCH, payload: value});
    fetchShows(value)(dispatch);
};

const toggleModal = () => dispatch => dispatch({type: TOGGLE_MODAL});

const handleSelect = event => dispatch => {
    const {dataset} = event.currentTarget;
    const {id} = dataset;
    api.getSelected(id)
        .then(res => {
            dispatch({type: SET_SELECTED, payload: res});
            toggleModal()(dispatch);
        });
};

export {
    toggleModal,
    setSearch,
    handleSelect
}
