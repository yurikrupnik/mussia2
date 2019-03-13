import React from 'react';
import { observable, decorate, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import api from '../../api/movies/api';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';


class AppState {
    @observable search = '';
    @observable data = [];
    @observable selected = {};
    @observable modal = false;

    setSelected(value) {
        this.selected = value;
    }

    setData(value) {
        this.data = value;
    }

    @action.bound
    toggleModal() {
        this.modal = !this.modal;
    }

    @action.bound
    setSearch(e) {
        this.search = e.target.value;
        api.fetch(this.search).then(res => {
            this.data = res;
        });
    }

    @action.bound
    handleSelect(e) {
        const { dataset } = e.currentTarget;
        const { id } = dataset;
        api.getSelected(id)
            .then((res) => {
                this.setSelected(res);
                this.toggleModal();
            });
    }

}


const TimerView = observer((props) => {
    return (
        <div>
            <Header title="Mobx way" value={props.state.search} onChange={props.state.setSearch} />
            <List data={props.state.data} onSelect={props.state.handleSelect} />
            <Dialog
                isOpen={props.state.modal}
                handleDialogClose={props.state.toggleModal}
                showInfo={props.state.selected}
            />
        </div>
    );
});


@observer
class MobxMovies extends React.Component {
    render() {
        return (
            <div>
                <TimerView state={new AppState()} />
                <DevTools />
            </div>
        );
    }
}

// const MobxMovies = (props) => {
//     console.log('props', props);
//
//     return (
//         <div>
//             MobxMovies movies here
//         </div>
//     )
// };

export default MobxMovies;
export { AppState };
