module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/poi-categories',
      handler: 'poi-category.find',
    },
    {
      method: 'GET',
      path: '/poi-categories/:id',
      handler: 'poi-category.findOne',
    },
  ],
};
