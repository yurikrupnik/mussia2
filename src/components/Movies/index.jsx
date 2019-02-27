import React, {useState, useCallback, useContext, useEffect} from 'react';
import api from '../../api/movies/api';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';

const Movies = () => {
    const [search, setSearch] = useState('');
    const [shows, setShows] = useState([]);
    const [selected, setSelected] = useState({});
    const [open, setOpen] = useState(false);

    // function toggleOpen() {
    //     setOpen(!open);
    // }

    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const handleChange = useCallback(
        (e) => {
            const {value} = e.target;
            setSearch(value);
            api.fetch(value)
                .then(setShows);
        }, []
    );

    const handleSelect = useCallback(
        (e) => {
            const {dataset} = e.currentTarget;
            const {id} = dataset;
            // setSelected({id});
            api.getSelected(id)
                .then(res => {
                    setSelected(res);
                    toggleOpen();
                });
        }, []
    );

    const handleClick = useCallback((e) => {
        const data = shows.reduce((acc, next, i) => {
            if (i === 0) {
                next.show.name = 'yura';
            }
            return acc.concat(next);
        }, []);
        // console.log('data', data);
        setShows(data);
    }, [shows]);

    console.log('selected', selected);


    return (
        <div>
            <button onClick={handleClick}>change first item name</button>
            <Header title="Hooks useState way" value={search} onChange={handleChange}/>
            <List data={shows} onSelect={handleSelect}/>
            <Dialog
                isOpen={open}
                handleDialogClose={toggleOpen}
                showInfo={selected}
            />
        </div>
    )
};

export default Movies;
// export default React.memo(Movies);

