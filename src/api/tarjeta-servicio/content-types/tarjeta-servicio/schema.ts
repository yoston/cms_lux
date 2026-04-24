export default {
    kind: 'collectionType',
    collectionName: 'tarjeta_servicios',
    info: {
        singularName: 'tarjeta-servicio',
        pluralName: 'tarjeta-servicios',
        displayName: 'Tarjeta Servicio',
        description: 'Tarjetas de servicios para la seccion de detalles',
    },
    options: {
        increments: true,
        timestamps: true,
        draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
        titulo: {
            type: 'string',
            required: true,
            maxLength: 255,
        },
        subtitulo: {
            type: 'string',
            maxLength: 255,
        },
        imagen: {
            allowedTypes: ['images'],
            type: 'media',
            multiple: false,
            required: true,
        },
        orden: {
            type: 'integer',
            default: 0,
        },
    },
};
