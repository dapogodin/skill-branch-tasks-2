import config from 'lego-starter-kit/utils/config';
import baseConfig from 'lego-starter-kit/config';
import GetEnvData from '../App/api/v1/Task2/GetEnvData';

export default config.server(baseConfig, {
    client: require('./client').default, // eslint-disable-line
    env: process.argv.includes('--release') ? "production" : (process.env.NODE_ENV || process.env.ENV || 'development'),
    port: process.env.PORT || 8080,

    protocol: 'https',
    db: {
        uri: process.env.DB || 'mongodb://lsk-example1:lsk-example1-pass@publicdb.mgbeta.ru:27000/lsk-example1',
    },
    jwt: {
        secret: 'REPLACE_ME_PLEASE',
    },
    ...GetEnvData('.env.example')
});