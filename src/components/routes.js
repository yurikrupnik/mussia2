// import Loadable from './Loadable';
import Movies from './Movies';
import ReduxMovies from './ReduxMovies';
import ContextMovies from './ContextMovies';
import MobxMovies from './MobxMovies';
import ConsumerExample from './ConsumerExample';

// const Movies = Loadable({
//     loader: () => import(/* webpackChunkName: "bas" */ './Movies'),
// });
//
// const ReduxMovies = Loadable({
//     loader: () => import(/* webpackChunkName: "sd" */ './ReduxMovies'),
// });
//
// const ContextMovies = Loadable({
//     loader: () => import(/* webpackChunkName: "f" */ './ContextMovies'),
// });
//
// const MobxMovies = Loadable({
//     loader: () => import(/* webpackChunkName: "g" */ './MobxMovies'),
// });

// const About = Loadable({
//     loader: () => import(/* webpackChunkName: "about" */ './About'),
// });
//
// const Login = Loadable({
//     loader: () => import(/* webpackChunkName: "login" */ '../api/auth/container'),
// });
//
// const Dashboard = Loadable({
//     loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard'),
// });
//
// const Projects = Loadable({
//     loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
// });
//
// const Users = Loadable({
//     loader: () => import(/* webpackChunkName: "users" */ './Users'),
// });
//
// const Register = Loadable({
//     loader: () => import(/* webpackChunkName: "register" */ './Register'),
// });
//
// const ChatRoom = Loadable({
//     loader: () => import(/* webpackChunkName: "chat" */ './ChatRoom'),
// });

const routes = [
    // {
    //     path: '/',
    //     component: Dashboard,
    //     exact: true,
    //     key: 'dashboard'
    // },
    // {
    //     path: '/topics',
    //     component: Topics,
    //     key: 'topics'
    // },
    // {
    //     path: '/about',
    //     component: About,
    //     key: 'about'
    // },
    // {
    //     path: '/register',
    //     component: Register,
    //     key: 'register'
    // },
    // {
    //     path: '/chat',
    //     component: ChatRoom,
    //     key: 'chat'
    // },
    // {
    //     path: '/login',
    //     component: Login,
    //     key: 'login'
    // },
    // {
    //     path: '/projects',
    //     component: Projects,
    //     key: 'projects'
    // },
    // {
    //     path: '/users',
    //     component: Users,
    //     key: 'users'
    // },
    {
        path: '/base',
        component: Movies,
        key: 'Movies'
    },
    {
        path: '/redux',
        component: ReduxMovies,
        key: 'ReduxMovies'
    },
    {
        path: '/context',
        component: ContextMovies,
        key: 'ContextMovies'
    },
    {
        path: '/mobx',
        component: MobxMovies,
        key: 'MobxMovies'
    },
    {
        path: '/consumer',
        component: ConsumerExample,
        key: 'consumer'
    },
];

export default routes;
