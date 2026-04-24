export default {
    routes: [
        {
            method: 'GET',
            path: '/contacto',
            handler: 'contacto.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/contacto',
            handler: 'contacto.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
