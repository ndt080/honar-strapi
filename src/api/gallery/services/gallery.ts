/**
 * gallery service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::gallery.gallery', ({ strapi }) => ({
  find: async () => {
    try {
      return await strapi.entityService.findMany('api::gallery.gallery', {
        populate: {
          sources: {
            fields: ['url'],
          },
        },
      });
    } catch (err) {
      return err;
    }
  },
  preview: async () => {
    try {
      return await strapi.entityService.findMany('api::gallery.gallery', {
        populate: {
          sources: {
            fields: ['url'],
            sort: { createdAt: 'desc' },
            limit: 24,
          },
        },
      });
    } catch (err) {
      return err;
    }
  },
}));
