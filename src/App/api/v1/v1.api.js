import getAuth from './Auth';
import getUser from './User';
import getTask1 from './Task1';

export default (ctx, params) => {
    const api = ctx.asyncRouter();

    api.use('/auth', getAuth(ctx, params));
    api.use('/user', getUser(ctx, params));

    api.use('/task1', getTask1(ctx, params));

    api.all('*', () => {
        return 'Example API working';
    });

    return api;
};