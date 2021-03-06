import getAuth from './Auth';
import getUser from './User';
import getTask1 from './Task1';
import getTask2 from './Task2';
import getTaskLodash from './TaskLodash';

export default (ctx, params) => {
    const api = ctx.asyncRouter();

    api.use('/auth', getAuth(ctx, params));
    api.use('/user', getUser(ctx, params));

    api.use('/task1', getTask1(ctx, params));
    api.use('/task2', getTask2(ctx, params));

    api.use('/task-lodash', getTaskLodash(ctx, params));

    api.all('*', () => {
        return 'Example API working';
    });

    return api;
};