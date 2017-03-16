import Modules from '../v1.modules';

export default (ctx) => {
    const modules = new Modules(ctx);
    const { e500 } = ctx.errors;
    const resource = {

        getSum: async(req, res) => {
            const { a, b } = req.query;
            const sum = (+a || 0) + (+b || 0);
            res.send(sum.toString());
        },

    };

    return resource;
};