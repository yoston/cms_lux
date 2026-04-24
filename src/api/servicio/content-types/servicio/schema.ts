export default {
    kind: 'singleType',
    collectionName: 'servicioS',
    info: {
        singularName: 'servicio',
        pluralName: 'servicios',
        displayName: 'Servicios',
        description: 'Pagina de servicios disponibles',
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

        // Detalles de servicios
        serviciosTitulo: {
            type: 'string',
            maxLength: 255,
        },
        serviciosDescripcion: {
            type: 'text',
        },
        serviciosDetalle: {
            type: 'json',
        },

        // Seccion Cita
        citaTitulo: {
            type: 'string',
            maxLength: 255,
        },
        citaSubtitulo: {
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
    },
};
