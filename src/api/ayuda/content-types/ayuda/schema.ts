export default {
    kind: 'singleType',
    collectionName: 'ayudas',
    info: {
        singularName: 'ayuda',
        pluralName: 'ayuda-config',
        displayName: 'Ayuda',
        description: 'Centro de ayuda y preguntas frecuentes',
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

        // Seccion de Busqueda
        searchTitulo: {
            type: 'string',
            maxLength: 255,
        },
        searchPlaceholder: {
            type: 'string',
            maxLength: 255,
        },

        // Categorias de Ayuda
        categoriasTitulo: {
            type: 'string',
            maxLength: 255,
        },
        categorias: {
            type: 'json',
            description: 'Categorias principales de ayuda',
        },

        // FAQ Principales
        faqTitulo: {
            type: 'string',
            maxLength: 255,
        },
        faq: {
            type: 'json',
            description: 'Preguntas frecuentes principales',
        },

        // Guias y Tutoriales
        guiasTitulo: {
            type: 'string',
            maxLength: 255,
        },
        guiasDescripcion: {
            type: 'text',
        },

        // Contacto de Soporte
        soporteTitulo: {
            type: 'string',
            maxLength: 255,
        },
        soporteDescripcion: {
            type: 'text',
        },
        soporteCorreo: {
            type: 'email',
        },
        soporteTelefono: {
            type: 'string',
            maxLength: 20,
        },
        soportoHorario: {
            type: 'text',
        },

        // Links Utiles
        linksUtilesTitulo: {
            type: 'string',
            maxLength: 255,
        },
        linksUtiles: {
            type: 'json',
            description: 'Enlaces utiles para el usuario',
        },

        // Video Tutorial
        videoTutorialURL: {
            type: 'string',
            maxLength: 500,
        },
        videoTutorialTitulo: {
            type: 'string',
            maxLength: 255,
        },
    },
};
