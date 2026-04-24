export default {
    kind: 'collectionType',
    collectionName: 'destino_sonados',
    info: {
        singularName: 'destino-sonado',
        pluralName: 'destino-sonados',
        displayName: 'Destino Sonado',
        description: 'Destinos sonados con informacion completa',
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
        descripcion: {
            type: 'text',
        },
        imagen: {
            allowedTypes: ['images'],
            type: 'media',
            multiple: false,
        },
        disponibilidad: {
            type: 'string',
            maxLength: 100,
        },
        duracion: {
            type: 'string',
            maxLength: 100,
        },
        precio: {
            type: 'string',
            maxLength: 100,
        },
        noches: {
            type: 'string',
            maxLength: 50,
        },
        descripcionDetallada: {
            type: 'text',
        },
        incluidos: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::item-incluido.item-incluido',
        },
    },
};
