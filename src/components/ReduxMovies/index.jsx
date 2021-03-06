import React, {Component, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';
import { mapToProps as showsMapToProps, dispatchActions as showsActions } from '../../api/movies/selectors';
// import { tvShowSelected, userTyping } from '../../redux/feature/search/search.actions';
// import { ShowsList } from './components/ShowsList';
// import { setModalState } from '../../redux/feature/showInfo/showInfo.actions';
// import api from "../../api/movies/api";
//
// const data = [
//     {
//         name: 'tal',
//         age: 12
//     },
//     {
//         name: 'tamar',
//         age: 12
//     },
//     {
//         name: 'asd',
//         age: 12
//     }
// ];
//
// class ReduxMovies extends Component {
//     render() {
//         const { shows, toggleModal, setSearch, handleSelect } = this.props;
//         // console.log('props', props);
//         return (
//             <div>
//                 <Header title="Redux way" value={shows.query} onChange={setSearch} />
//                 <List data={shows.data} onSelect={handleSelect} />
//                 <Dialog
//                     isOpen={shows.modal}
//                     handleDialogClose={toggleModal}
//                     showInfo={shows.selected}
//                 />
//             </div>
//         );
//     }
// }

const ReduxMovies = (props) => {
    const { shows, toggleModal, setSearch, handleSelect } = props;
    console.log('props', props);
    return (
        <div>
            <Header title="Redux way" value={shows.query} onChange={setSearch} />
            <List data={shows.data} onSelect={handleSelect} />
            <Dialog
                isOpen={shows.modal}
                handleDialogClose={toggleModal}
                showInfo={shows.selected}
            />
        </div>
    );
};

ReduxMovies.propsTypes = {
    shows: PropTypes.shape({}).isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default connect(showsMapToProps, showsActions)(ReduxMovies);
