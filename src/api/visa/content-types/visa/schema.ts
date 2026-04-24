export default {
    kind: 'singleType',
    collectionName: 'visas',
    info: {
        singularName: 'visa',
        pluralName: 'visa-config',
        displayName: 'Visas',
        description: 'Pagina de informacion sobre visas y requisitos',
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

        // Seccion General
        seccionGeneralTitulo: {
            type: 'string',
            maxLength: 255,
        },
        seccionGeneralContenido: {
            type: 'text',
        },

        // Informacion Importante
        informacionImportanteTitulo: {
            type: 'string',
            maxLength: 255,
        },
        informacionImportante: {
            type: 'json',
            description: 'Lista de puntos importantes',
        },

        // Documentos Requeridos
        documentosTitulo: {
            type: 'string',
            maxLength: 255,
        },
        documentosContenido: {
            type: 'json',
            description: 'Lista de documentos necesarios',
        },

        // Proceso Paso a Paso
        procesoPasoTitulo: {
            type: 'string',
            maxLength: 255,
        },
        procesoPasoContenido: {
            type: 'json',
            description: 'Pasos del proceso de visa',
        },

        // Paises Destacados
        paisesTitulo: {
            type: 'string',
            maxLength: 255,
        },
        paisesDescripcion: {
            type: 'text',
        },

        // FAQ
        faqTitulo: {
            type: 'string',
            maxLength: 255,
        },
        faq: {
            type: 'json',
            description: 'Preguntas frecuentes',
        },

        // Llamada a Accion
        llamadaTitulo: {
            type: 'string',
            maxLength: 255,
        },
        llamadaSubtitulo: {
            type: 'string',
            maxLength: 255,
        },
    },
};
