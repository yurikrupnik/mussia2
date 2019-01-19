import Loadable from './Loadable';

const Topics = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ './Topics'),
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './About'),
});

// const Login = Loadable({
//     loader: () => import(/* webpackChunkName: "login" */ '../api/auth/container'),
// });
const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard'),
});

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});

const Users = Loadable({
    loader: () => import(/* webpackChunkName: "users" */ './Users'),
});

const Register = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ './Register'),
});

const ChatRoom = Loadable({
    loader: () => import(/* webpackChunkName: "chat" */ './ChatRoom'),
});

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
        key: 'dashboard'
    },
    {
        path: '/topics',
        component: Topics,
        key: 'topics'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
    {
        path: '/register',
        component: Register,
        key: 'register'
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'chat'
    },
    // {
    //     path: '/login',
    //     component: Login,
    //     key: 'login'
    // },
    {
        path: '/projects',
        component: Projects,
        key: 'projects'
    },
    {
        path: '/users',
        component: Users,
        key: 'users'
    }
];

export default routes;
