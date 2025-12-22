export default {
  routes: [
    {
      method: 'GET',
      path: '/rule-sections',
      handler: 'rule-section.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/rule-sections/:id',
      handler: 'rule-section.findOne',
      config: {
        policies: [],
      },
    },
  ],
};
