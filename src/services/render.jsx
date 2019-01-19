import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import React from 'react';

const render = (App, routes) => (req, response, next) => {
    const activeRoute = routes
        .find(route => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.url)
        : Promise.resolve([]);

    console.log('activeRoute', activeRoute);

    return promise
        .then((res) => {
            let appData = {};
            if (res.length && Array.isArray(activeRoute.providers)) {
                appData = activeRoute.providers.reduce((acc, nextProvider, i) => {
                    acc[nextProvider] = Array.isArray(res[0]) ? res[i] : res;
                    return acc;
                }, appData);
            }
            const context = {};
            const title = 'my title';
            const html = renderToString((
                <StaticRouter
                    location={req.url}
                    context={appData}
                >
                    <App userAgent={req.headers['user-agent']} />
                </StaticRouter>
            ));
            const state = { title, html, appData };
            return context.url ? response.redirect(301, context.url) : response.render('index', state);
        })
        .catch((err) => {
            console.log('err', err.stack); // eslint-disable-line no-console
            return next(err);
        });
};

export default render;
