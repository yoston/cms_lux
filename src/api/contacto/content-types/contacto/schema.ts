export default {
    kind: 'singleType',
    collectionName: 'contactos',
    info: {
        singularName: 'contacto',
        pluralName: 'contacto-config',
        displayName: 'Contacto',
        description: 'Pagina de contacto con informacion y formulario',
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

        // Informacion de Contacto
        correo: {
            type: 'email',
        },
        telefono: {
            type: 'string',
            maxLength: 20,
        },
        telefonoWhatsapp: {
            type: 'string',
            maxLength: 20,
        },
        direccion: {
            type: 'text',
        },
        horarioLaboral: {
            type: 'text',
        },

        // Redes Sociales
        redSocialFacebook: {
            type: 'string',
            maxLength: 500,
        },
        redSocialInstagram: {
            type: 'string',
            maxLength: 500,
        },
        redSocialTwitter: {
            type: 'string',
            maxLength: 500,
        },
        redSocialLinkedin: {
            type: 'string',
            maxLength: 500,
        },

        // Ubicacion
        latitud: {
            type: 'decimal',
        },
        longitud: {
            type: 'decimal',
        },

        // Seccion de Formulario
        formularioTitulo: {
            type: 'string',
            maxLength: 255,
        },
        formularioDescripcion: {
            type: 'text',
        },

        // Seccion de Mapa
        mostrarMapa: {
            type: 'boolean',
            default: true,
        },
    },
};
