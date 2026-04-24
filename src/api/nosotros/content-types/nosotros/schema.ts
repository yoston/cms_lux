export default {
    kind: 'singleType',
    collectionName: 'nosotroS',
    info: {
        singularName: 'nosotros',
        pluralName: 'nosotros-contenido',
        displayName: 'Nosotros',
        description: 'Pagina de informacion sobre nosotros',
    },
    options: {
        increments: true,
        timestamps: true,
        draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
        // Hero
        heroImagen: {
            allowedTypes: ['images'],
            type: 'media',
            multiple: false,
        },
        heroTitulo: {
            type: 'string',
            maxLength: 255,
        },
        heroSubtitulo: {
            type: 'string',
            maxLength: 255,
        },

        // Quienes Somos
        quienesSomosTitulo: {
            type: 'string',
            maxLength: 255,
        },
        quienesSomosDescripcion: {
            type: 'text',
        },

        // Por Que Elegir nos
        porQueElegirnosTitulo: {
            type: 'string',
            maxLength: 255,
        },

        // Valores
        valores: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::valor-empresarial.valor-empresarial',
        },
    },
};
