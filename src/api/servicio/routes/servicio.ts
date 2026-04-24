export default {
    routes: [
        {
            method: 'GET',
            path: '/servicio',
            handler: 'servicio.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/servicio',
            handler: 'servicio.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
