import type { Schema, Struct } from '@strapi/strapi';

export interface ContentImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_image_blocks';
  info: {
    description: 'Bloque de imagen con texto opcional';
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitulo: Schema.Attribute.String;
    texto: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    description: 'Bloque de texto simple';
    displayName: 'Text Block';
    icon: 'feather';
  };
  attributes: {
    subtitulo: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.image-block': ContentImageBlock;
      'content.text-block': ContentTextBlock;
    }
  }
}
