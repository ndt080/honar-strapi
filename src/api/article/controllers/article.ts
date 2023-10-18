import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
      .service('api::article.article')
      .find(sanitizedQueryParams);

    return { data: results, meta: { pagination } };
  },
  async findOne(ctx) {
    await this.validateQuery(ctx);

    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { id } = ctx.request.params;
    const data = await strapi.service('api::article.article').findOne(id, sanitizedQueryParams);
    return { data, meta: {} };
  },
  latestAction: async (ctx) => {
    try {
      const data = await strapi.service('api::article.article').latestArticles();
      ctx.body = { data };
    } catch (err) {
      ctx.body = err;
    }
  },
}));
