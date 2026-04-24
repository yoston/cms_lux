export default {
    kind: 'collectionType',
    collectionName: 'paquete_premiums',
    info: {
        singularName: 'paquete-premium',
        pluralName: 'paquete-premiums',
        displayName: 'Paquete Premium',
        description: 'Paquetes premium con opciones de categorias',
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
        etiqueta: {
            type: 'enumeration',
            enum: ['Seleccion del concierge', 'Popular', 'Todo Incluido'],
        },
        dias: {
            type: 'string',
            maxLength: 50,
        },
        imagen: {
            allowedTypes: ['images'],
            type: 'media',
            multiple: false,
        },
        descripcion: {
            type: 'text',
        },
        duracion: {
            type: 'string',
            maxLength: 100,
        },
        precio: {
            type: 'string',
            maxLength: 100,
        },
        destacados: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::item-incluido.item-incluido',
        },
        incluidos: {
            type: 'relation',
            relation: 'oneToMany',
            target: 'api::item-incluido.item-incluido',
        },
    },
};
