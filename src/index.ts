export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    try {
      // Set permissions for public role
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        // Enable find permission
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: 'api::rule-section.rule-section.find'
          },
          data: { enabled: true }
        });

        // Enable findOne permission
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: 'api::rule-section.rule-section.findOne'
          },
          data: { enabled: true }
        });
      }
    } catch (error) {
      console.log('Bootstrap permissions setup failed:', error);
    }
  },
};
