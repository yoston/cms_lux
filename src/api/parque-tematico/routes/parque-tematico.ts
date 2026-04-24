export default {
    routes: [
        {
            method: 'GET',
            path: '/parque-tematicoS',
            handler: 'parque-tematico.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/parque-tematicoS/:id',
            handler: 'parque-tematico.findOne',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/parque-tematicoS',
            handler: 'parque-tematico.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/parque-tematicoS/:id',
            handler: 'parque-tematico.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/parque-tematicoS/:id',
            handler: 'parque-tematico.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
