export default {
  routes: [
    {
      method: 'GET',
      path: '/faq-items',
      handler: 'faq-item.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/faq-items/:id',
      handler: 'faq-item.findOne',
      config: { policies: [] },
    },
  ],
};
