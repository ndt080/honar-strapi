import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
  latestArticles: async () => {
    try {
      return await strapi.entityService.findMany('api::article.article', {
        populate: {
          image: {
            fields: ['url'],
          },
        },
        limit: 4,
        sort: { publishedAt: 'desc' },
      });
    } catch (err) {
      return err;
    }
  },
}));
