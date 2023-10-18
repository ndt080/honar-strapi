/**
 * page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
      .service('api::page.page')
      .find(sanitizedQueryParams);

    return { data: results, meta: { pagination } };
  },
  async findOne(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { id } = ctx.request.params;
    const data = await strapi.service('api::page.page').findOne(id, sanitizedQueryParams);
    return { data, meta: {} };
  },
}));
