export default {
  routes: [
    {
      method: 'GET',
      path: '/poi-categories',
      handler: 'poi-category.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/poi-categories/:id',
      handler: 'poi-category.findOne',
      config: {
        policies: [],
      },
    },
  ],
};
