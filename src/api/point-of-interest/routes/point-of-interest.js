module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/points-of-interest',
      handler: 'point-of-interest.find',
    },
    {
      method: 'GET',
      path: '/points-of-interest/:id',
      handler: 'point-of-interest.findOne',
    },
  ],
};
