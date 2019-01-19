/* this file is used in webpack client for dev port and proxy host */
// console.log('process.env.NODE_ENV_DOCKER config file', process.env.NODE_ENV_DOCKER);
const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
// const ip = process.env.IP || 'localhost';
console.log('port config file', port);
console.log('isProd config file', isProd);

const host = `http://localhost:${port}`;
const devPort = port + 1;
const devHost = `http://localhost:${devPort}`;
const baseURL = isProd || process.env.DEBUG ? host : devHost;
const databaseUrl = process.env.NODE_ENV_DOCKER && JSON.parse(process.env.NODE_ENV_DOCKER)
    ? 'mongodb://db/react-boilerplate'
    : 'mongodb://localhost/react-boilerplate';
// console.log('process.env.NODE_ENV_DOCKER config file', process.env.NODE_ENV_DOCKER);
// console.log('process.env.NODE_ENV config file', process.env.NODE_ENV);
// console.log('process.env.PORT config file', process.env.PORT);


module.exports = {
    port,
    host,
    devPort,
    devHost,
    databaseUrl,
    baseURL,
    isProd
};
