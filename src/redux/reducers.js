import {combineReducers} from 'redux';
// import configReducer from './config';

import shows from '../api/movies/reducer';
// import results from '../api/results/reducer';
// import quizzes from '../api/quizzes/reducer';
// import errors from './errors/reducer';

//
// const apiReducer = combineReducers({
//   movies,
//   // quizzes,
//   // results,
// });

const reducers = {
  // config: configReducer,
  // api: apiReducer,
  // errors
};

export default combineReducers({ shows });
