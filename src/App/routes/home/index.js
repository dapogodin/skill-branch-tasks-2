import HomePage from './HomePage';

export default {
    action: ({ ctx }) => {
        return {
            title: 'Homepage',
            component: < HomePage siteTitle = { ctx.config.siteTitle }
            />,
        };
    },
};