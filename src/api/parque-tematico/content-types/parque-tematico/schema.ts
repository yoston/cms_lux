export default {
    kind: 'collectionType',
    collectionName: 'parque_tematicoS',
    info: {
        singularName: 'parque-tematico',
        pluralName: 'parque-tematicos',
        displayName: 'Parque Tematico',
        description: 'Parques tematicos disponibles',
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
        },
    },
};
