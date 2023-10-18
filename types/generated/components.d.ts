import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageCoaches extends Schema.Component {
  collectionName: 'components_home_page_coaches';
  info: {
    displayName: 'Coaches';
    icon: 'user';
    description: '';
  };
  attributes: {
    data: Attribute.Relation<'home-page.coaches', 'oneToMany', 'api::coache.coache'>;
  };
}

export interface HomePageContacts extends Schema.Component {
  collectionName: 'components_contacts_contacts';
  info: {
    displayName: 'contacts';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    mapName: Attribute.Text & Attribute.Required;
    mapUrl: Attribute.Text & Attribute.Required;
    contacts: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
  };
}

export interface HomePagePartners extends Schema.Component {
  collectionName: 'components_home_page_partners';
  info: {
    displayName: 'Partners';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    data: Attribute.Relation<'home-page.partners', 'oneToMany', 'api::partner.partner'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.coaches': HomePageCoaches;
      'home-page.contacts': HomePageContacts;
      'home-page.partners': HomePagePartners;
    }
  }
}
