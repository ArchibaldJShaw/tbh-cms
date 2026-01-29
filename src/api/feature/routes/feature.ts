export default {
  routes: [
    {
      method: 'GET',
      path: '/features',
      handler: 'feature.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/features/:id',
      handler: 'feature.findOne',
      config: { policies: [] },
    },
  ],
};
