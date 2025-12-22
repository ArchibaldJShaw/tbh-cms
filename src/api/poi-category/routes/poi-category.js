module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/poi-categories',
      handler: 'poi-category.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/poi-categories/:id',
      handler: 'poi-category.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
