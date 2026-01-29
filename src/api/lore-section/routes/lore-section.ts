export default {
  routes: [
    {
      method: 'GET',
      path: '/lore-sections',
      handler: 'lore-section.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/lore-sections/:id',
      handler: 'lore-section.findOne',
      config: { policies: [] },
    },
  ],
};
