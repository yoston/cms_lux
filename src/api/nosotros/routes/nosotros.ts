export default {
    routes: [
        {
            method: 'GET',
            path: '/nosotros',
            handler: 'nosotros.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/nosotros',
            handler: 'nosotros.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
