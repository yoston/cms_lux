export default {
    routes: [
        {
            method: 'GET',
            path: '/tarjeta-servicios',
            handler: 'tarjeta-servicio.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/tarjeta-servicios/:id',
            handler: 'tarjeta-servicio.findOne',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/tarjeta-servicios',
            handler: 'tarjeta-servicio.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/tarjeta-servicios/:id',
            handler: 'tarjeta-servicio.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/tarjeta-servicios/:id',
            handler: 'tarjeta-servicio.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
