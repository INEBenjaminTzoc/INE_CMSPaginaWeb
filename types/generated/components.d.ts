import type { Schema, Struct } from '@strapi/strapi';

export interface BrandingLogo extends Struct.ComponentSchema {
  collectionName: 'components_branding_logos';
  info: {
    description: '';
    displayName: 'IconoHeader';
    icon: 'layout';
  };
  attributes: {
    icono_institucion: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    nombre_institucion: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 3;
      }>;
    url_opcional: Schema.Attribute.String;
  };
}

export interface ButtonsDropdownMenu extends Struct.ComponentSchema {
  collectionName: 'components_buttons_dropdown_menus';
  info: {
    description: '';
    displayName: 'MenuDropdown';
    icon: 'cursor';
  };
  attributes: {
    children: Schema.Attribute.Component<'buttons.enlace-simple', true>;
    title: Schema.Attribute.String;
  };
}

export interface ButtonsEnlaceSimple extends Struct.ComponentSchema {
  collectionName: 'components_buttons_enlace_simples';
  info: {
    description: '';
    displayName: 'MenuItem';
    icon: 'cursor';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_cards_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'apps';
  };
  attributes: {
    imagenes: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CardsIndicadorCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_indicador_cards';
  info: {
    displayName: 'IndicadorCard';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    footer: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    prefix: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    suffix: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'branding.logo': BrandingLogo;
      'buttons.dropdown-menu': ButtonsDropdownMenu;
      'buttons.enlace-simple': ButtonsEnlaceSimple;
      'cards.carousel': CardsCarousel;
      'cards.indicador-card': CardsIndicadorCard;
    }
  }
}
