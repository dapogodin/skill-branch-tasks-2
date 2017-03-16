import getResource from './Task1.resource';
import cors from 'cors';

export default (ctx, params) => {
    const api = ctx.asyncRouter();
    const resource = new getResource(ctx);

    api.use('/', cors());
    api.get('/', resource.getSum);

    return api;
};