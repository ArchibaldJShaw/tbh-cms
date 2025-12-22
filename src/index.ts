export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set permissions for public role
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      await strapi.query('plugin::users-permissions.permission').updateMany({
        where: {
          role: publicRole.id,
          action: ['api::rule-section.rule-section.find', 'api::rule-section.rule-section.findOne']
        },
        data: { enabled: true }
      });
    }
  },
};
