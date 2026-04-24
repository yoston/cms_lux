export default {
    kind: 'singleType',
    collectionName: 'paqueteS',
    info: {
        singularName: 'paquete',
        pluralName: 'paquetes',
        displayName: 'Paquetes',
        description: 'Pagina de paquetes disponibles',
    },
    options: {
        increments: true,
        timestamps: true,
        draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
        // Seccion Hero
        heroTitulo: {
            type: 'string',
            maxLength: 255,
        },
        heroSubtitulo: {
            type: 'string',
            maxLength: 255,
        },

        // Seccion Llamada Accion
        llamadaTitulo: {
            type: 'string',
            maxLength: 255,
        },
        llamadaSubtitulo: {
            type: 'string',
            maxLength: 255,
        },

        // Seccion Boletin
        boletinTitulo: {
            type: 'string',
            maxLength: 255,
        },
        boletinDescripcion: {
            type: 'text',
        },

        // Relaciones
        destinosSonados: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::destino-sonado.destino-sonado',
        },
        paquetesPremium: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::paquete-premium.paquete-premium',
        },
        parquesTematicos: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::parque-tematico.parque-tematico',
        },
    },
};
