import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { port, databaseUrl, appServerPort } from './config';
import api from './api';
import render from './services/render';
import db from './services/db';
import server from './services/socket/server';
import passport from './services/passport';
import App from './components/App';
import routes from './components/routes';

const webServer = express();
const appServer = express();

const assets = path.resolve(__dirname, 'assets');

appServer.use(cors());
webServer.use(express.static(assets));
// webServer.use(morgan('dev'));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);
webServer.use(render(App, routes));

appServer.use(morgan('dev'));
appServer.use(db(databaseUrl));
appServer.use(passport(appServer)); // todo return that after docker tests
appServer.use(api);

appServer.listen(appServerPort);
server(webServer).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
