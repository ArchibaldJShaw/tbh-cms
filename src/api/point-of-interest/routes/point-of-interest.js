module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/points-of-interest',
      handler: 'point-of-interest.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/points-of-interest/:id',
      handler: 'point-of-interest.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
