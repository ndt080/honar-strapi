/**
 * gallery controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::gallery.gallery', ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const data = await strapi.service('api::gallery.gallery').find(sanitizedQueryParams);
    return { data, meta: {} };
  },
  preview: async (ctx) => {
    try {
      const data = await strapi.service('api::gallery.gallery').preview();
      ctx.body = { data };
    } catch (err) {
      ctx.body = err;
    }
  },
}));
