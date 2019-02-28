import React, {Component, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Movies from './context';
import api from '../api';
import { toggleLoading } from '../../helpers';


const MoviesProvider = (props) => {
    const [search, setSearch] = useState('');
    const [shows, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const handleChange = useCallback(
        (e) => {
            const {value} = e.target;
            setSearch(value);
            api.fetch(value)
                .then(setData);
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
        setData(data);
    }, [shows]);

    const { children } = props;
    console.log('shows', shows);

    return (
        <Movies.Provider value={{
            // ...this.state,
            search,
            shows,
            selected,
            open,
            toggleOpen,
            handleChange,
            handleSelect,
            setData
        }}
        >
            {children}
        </Movies.Provider>
    );
};

// class MoviesProvider extends Component {
//     static provider() {
//         return api.provider;
//     }
//
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             data: props.initData,
//             loading: false,
//             selected: {},
//             search: '',
//             modal: false
//         };
//
//         this.toggleOpen = this.toggleOpen.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSelect = this.handleSelect.bind(this);
//         this.setData = this.setData.bind(this);
//     }
//
//     handleSelect(e) {
//         const { dataset } = e.currentTarget;
//         const { id } = dataset;
//         this.fetchById(id);
//     }
//
//     handleChange(e) {
//         const { value } = e.target;
//         this.setSearch(value);
//         this.fetch(value);
//     }
//
//     setSearch(search) {
//         this.setState(({ search }))
//     }
//
//     toggleOpen() {
//         this.setState(prevState => ({modal: !prevState.modal}))
//     }
//
//     setSelected(selected) {
//         this.setState({ selected });
//     }
//
//     toggleCallback(params, cb) {
//         return () => api.fetch(params)
//             .then((data) => {
//                 this.setState(prevState => ({
//                     data,
//                     loading: !prevState.loading
//                 }), cb);
//             })
//             .catch((error) => {
//                 this.setState(prevState => ({
//                     error,
//                     loading: !prevState.loading
//                 }));
//             });
//     }
//
//     fetch(params, cb) {
//         this.setState(toggleLoading, this.toggleCallback(params, cb));
//     }
//
//     fetchById(id) {
//         // this.setState(toggleLoading, () => {
//             api.getSelected(id)
//                 .then(res => {
//                     this.setSelected(res);
//                     this.toggleOpen();
//                     // this.setState(toggleLoading);
//                 });
//         // });
//     }
//
//     setData(data) {
//         this.setState(({ data }));
//     }
//
//     render() {
//         const { children } = this.props;
//         return (
//             <Movies.Provider value={{
//                 ...this.state,
//                 toggleOpen: this.toggleOpen,
//                 handleChange: this.handleChange,
//                 handleSelect: this.handleSelect,
//                 setData: this.setData
//             }}
//             >
//                 {children}
//             </Movies.Provider>
//         );
//     }
// }

MoviesProvider.defaultProps = {
    initData: []
};

MoviesProvider.propTypes = {
    children: PropTypes.element.isRequired,
    initData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default MoviesProvider;
