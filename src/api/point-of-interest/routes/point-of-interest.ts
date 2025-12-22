export default {
  routes: [
    {
      method: 'GET',
      path: '/points-of-interest',
      handler: 'point-of-interest.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/points-of-interest/:id',
      handler: 'point-of-interest.findOne',
      config: {
        policies: [],
      },
    },
  ],
};
