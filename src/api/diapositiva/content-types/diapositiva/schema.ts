export default {
    kind: 'collectionType',
    collectionName: 'diapositivas',
    info: {
        singularName: 'diapositiva',
        pluralName: 'diapositivas',
        displayName: 'Diapositiva',
        description: 'Diapositivas para carruseles y banners',
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
