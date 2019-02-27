import React, {Component, useCallback, useState} from 'react';
import { connect } from 'react-redux';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';
import { mapToProps as showsMapToProps, dispatchActions as showsActions } from '../../api/movies/selectors';
// import { tvShowSelected, userTyping } from '../../redux/feature/search/search.actions';
// import { ShowsList } from './components/ShowsList';
// import { setModalState } from '../../redux/feature/showInfo/showInfo.actions';
// import api from "../../api/movies/api";

const ReduxMovies = (props) => {
    const { shows, toggleModal, setSearch, handleSelect } = props;
    console.log('props', props);
    return (
        <div>
            <button onClick={toggleModal}>change first item name</button>
            <Header title="Redux way" value={shows.query} onChange={setSearch}/>
            <List data={shows.data} onSelect={handleSelect}/>
            <Dialog
                isOpen={shows.modal}
                handleDialogClose={toggleModal}
                showInfo={shows.selected}
            />
        </div>
    );
};

export default connect(showsMapToProps, showsActions)(ReduxMovies);

// export default ReduxMovies;

