export default {
    routes: [
        {
            method: 'GET',
            path: '/visas',
            handler: 'visa.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/visas',
            handler: 'visa.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
