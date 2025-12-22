export default {
  routes: [
    {
      method: 'GET',
      path: '/map-zones',
      handler: 'map-zone.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/map-zones/:id',
      handler: 'map-zone.findOne',
      config: {
        policies: [],
      },
    },
  ],
};
