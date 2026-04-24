export default {
    routes: [
        {
            method: 'GET',
            path: '/destino-sonados',
            handler: 'destino-sonado.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/destino-sonados/:id',
            handler: 'destino-sonado.findOne',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/destino-sonados',
            handler: 'destino-sonado.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/destino-sonados/:id',
            handler: 'destino-sonado.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/destino-sonados/:id',
            handler: 'destino-sonado.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
