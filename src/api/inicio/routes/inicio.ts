export default {
    routes: [
        {
            method: 'GET',
            path: '/inicio',
            handler: 'inicio.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/inicio',
            handler: 'inicio.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
