export default {
  routes: [
    {
      method: 'GET',
      path: '/gallery-preview',
      handler: 'gallery.preview',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
