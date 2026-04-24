export default {
    routes: [
        {
            method: 'GET',
            path: '/valor-empresarials',
            handler: 'valor-empresarial.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/valor-empresarials/:id',
            handler: 'valor-empresarial.findOne',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/valor-empresarials',
            handler: 'valor-empresarial.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/valor-empresarials/:id',
            handler: 'valor-empresarial.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/valor-empresarials/:id',
            handler: 'valor-empresarial.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
