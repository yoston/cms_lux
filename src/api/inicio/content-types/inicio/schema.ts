export default {
    kind: 'singleType',
    collectionName: 'inicios',
    info: {
        singularName: 'inicio',
        pluralName: 'inicios',
        displayName: 'Inicio',
        description: 'Configuracion de la pagina de inicio',
    },
    options: {
        increments: true,
        timestamps: true,
        draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
        // Carrusel Hero
        diapositivas: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::diapositiva.diapositiva',
        },

        // Seccion Estadisticas
        clientesFrecuentes: {
            type: 'string',
            maxLength: 50,
        },
        experiencia: {
            type: 'string',
            maxLength: 50,
        },
        destinos: {
            type: 'string',
            maxLength: 50,
        },
        valoracion: {
            type: 'string',
            maxLength: 50,
        },

        // Seccion Detalles Servicios
        serviciosTitulo: {
            type: 'string',
            maxLength: 255,
        },
        serviciosDescripcion: {
            type: 'text',
        },
        tarjetasServicio: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::tarjeta-servicio.tarjeta-servicio',
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

        // Relaciones
        destinosSonados: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::destino-sonado.destino-sonado',
        },
    },
};
