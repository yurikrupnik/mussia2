import React, {useCallback, useContext} from 'react';
import MoviesContext from '../../api/movies/context/context';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';

const ContextMovies = () => {
    const shows = useContext(MoviesContext);

    const handleClick = useCallback((e) => {
        const data = shows.data.reduce((acc, next, i) => {
            if (i === 0) {
                next.show.name = 'yura';
            }
            return acc.concat(next);
        }, []);
        shows.setData(data);
    }, [shows]);

    console.log('shows.selected', shows.selected);


    return (
        <div>
            <button onClick={handleClick}>change first item name</button>
            <Header title="React Context Api" value={shows.search} onChange={shows.handleChange} />
            <List data={shows.data} onSelect={shows.handleSelect} />
            <Dialog
                isOpen={shows.modal}
                handleDialogClose={shows.toggleOpen}
                showInfo={shows.selected}
            />
        </div>
    )
};

export default ContextMovies;

