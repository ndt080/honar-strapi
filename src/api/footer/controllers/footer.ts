/**
 * footer controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const data = await strapi.service('api::footer.footer').find(sanitizedQueryParams);
    return { data, meta: {} };
  },
}));
