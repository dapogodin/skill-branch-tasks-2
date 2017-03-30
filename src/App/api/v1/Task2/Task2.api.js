import getResource from './Task2.resource';
import cors from 'cors';

export default (ctx, params) => {
    const api = ctx.asyncRouter();
    const resource = new getResource(ctx);

    api.use('/', cors());
    api.use('/', (req, res, next) => {
        let data = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
            data += chunk;
        });
        req.on('end', function() {
            req.body = data;
            next();
        });
    });

    api.post('/', resource.getNestedConfig);
    api.get('/logenv', resource.logEnvFile);

    return api;
};