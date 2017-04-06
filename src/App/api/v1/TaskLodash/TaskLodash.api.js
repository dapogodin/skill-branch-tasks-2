import getResource from './TaskLodash.resource';
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

    api.all('/', async(req, res) => { res.send('lodash tasks: /1, /2') });
    api.all('/1', resource.getWordFrequency);
    api.all('/2', resource.applyScenario);

    return api;
};