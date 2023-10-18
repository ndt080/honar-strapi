/**
 * navigation controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::navigation.navigation', ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
      .service('api::navigation.navigation')
      .find(sanitizedQueryParams);

    return { data: results, meta: { pagination } };
  },
  async findOne(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { id } = ctx.request.params;
    const data = await strapi
      .service('api::navigation.navigation')
      .findOne(id, sanitizedQueryParams);
    return { data, meta: {} };
  },
}));
