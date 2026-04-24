export default {
    routes: [
        {
            method: 'GET',
            path: '/paquete',
            handler: 'paquete.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/paquete',
            handler: 'paquete.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
