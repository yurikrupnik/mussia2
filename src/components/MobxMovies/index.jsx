import React from 'react';
import {observable, decorate, action, computed} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from "mobx-react-devtools";

import api from '../../api/movies/api';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';

var appState = observable({
    search: '',
    data: [],
    selected: {},
    modal: false
});

// console.log('appState', appState);


class Show {
    constructor() {

    }
}

class Shows {
    constructor() {
        this.data = [];
        this.search = '';
        this.selected = {};
        this.modal = false;
        this.loading = false;
    }
}

decorate(Shows, {
    data: observable,
    search: observable,
    selected: observable,
    modal: observable
});

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
    toggleModal(value) {
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
        const {dataset} = e.currentTarget;
        const {id} = dataset;
        api.getSelected(id)
            .then(res => {
                this.setSelected(res);
                this.toggleModal();
            });
    }

}

// const s = new Shows();
// console.log('s', s);
//
// observer(
//     class TimerView extends React.Component {
//         render() {
//             return (
//                 <button onClick={this.onReset.bind(this)}>
//                     Seconds passed: {this.props.appState.timer}
//                 </button>
//             );
//         }
//
//         onReset() {
//             this.props.appState.resetTimer();
//         }
//     }
// );

const TimerView = observer((props) => {
    console.log('props', props);
    const {appState} = props;

    function handleChange() {

    }

    const search = '';
    return (
        <div>
            <Header title="Mobx way" value={props.state.search} onChange={props.state.setSearch}/>
            <List data={props.state.data} onSelect={props.state.handleSelect}/>
            <Dialog
                isOpen={props.state.modal}
                handleDialogClose={props.state.toggleModal}
                showInfo={props.state.selected}
            />
        </div>
    );
});


const counter = observable({
    count: 3
});

counter.increment = function () {
    this.count++
};

counter.decrement = function () {
   this.count--;
};

counter.withHello = function () {
    return this.count + 'hello';
};

// const state = new AppState();
// console.log('state', state);


class Todo {
    constructor(title) {
        this.id = Math.random();
        this.title = title;
        this.finished = false;
    }
    // id = Math.random();
    // @observable title = '';
    // @observable finished = false;
}
//
decorate(Todo, {
    title: observable,
    finished: observable
});

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
//
@observer
class TodoListView extends React.Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

const TodoView = ({todo}) => <li>
        <input
            type='checkbox'
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>;

const store = new TodoList();
console.log('store', store);
store.todos.push(
    new Todo('Get Coffee'),
    new Todo('Write simpler code')
);

@observer
class MobxMovies extends React.Component {
    handleDec = () => {
        counter.decrement();
    };

    handleInc = () => {
        counter.increment();
    };

    render() {
        // console.log('counter.withHello', counter.withHello);
        // const s = counter.withHello();
        return (
            <div>
                {/*<div>counter: {counter.count}</div>*/}
                {/*<button onClick={this.handleInc}>+</button>*/}
                {/*<button onClick={this.handleDec}>-</button>*/}
                <TodoListView todoList={store} />
                <TimerView state={new AppState()} />
                <DevTools />
            </div>
        )
    }

    // render() {
    //     console.log('this.props', this.props);
    //
    //     return (
    //         <div>
    //             <TimerView/>
    //             <DevTools/>
    //         </div>
    //     );
    // }
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

