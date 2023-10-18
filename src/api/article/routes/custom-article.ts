export default {
  routes: [
    {
      method: 'GET',
      path: '/latest-articles',
      handler: 'article.latestAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
