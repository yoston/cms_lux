export default {
    routes: [
        {
            method: 'GET',
            path: '/paquete-premiums',
            handler: 'paquete-premium.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/paquete-premiums/:id',
            handler: 'paquete-premium.findOne',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/paquete-premiums',
            handler: 'paquete-premium.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/paquete-premiums/:id',
            handler: 'paquete-premium.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/paquete-premiums/:id',
            handler: 'paquete-premium.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
