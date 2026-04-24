export default {
    routes: [
        {
            method: 'GET',
            path: '/ayuda',
            handler: 'ayuda.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/ayuda',
            handler: 'ayuda.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
