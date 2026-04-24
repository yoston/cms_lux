export default {
    kind: 'collectionType',
    collectionName: 'valor_empresarials',
    info: {
        singularName: 'valor-empresarial',
        pluralName: 'valor-empresarials',
        displayName: 'Valor Empresarial',
        description: 'Valores y principios de la empresa',
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
        descripcion: {
            type: 'text',
        },
        icono: {
            type: 'string',
            maxLength: 50,
            description: 'Emoji o codigo de icono representativo',
        },
        orden: {
            type: 'integer',
            default: 0,
        },
    },
};
