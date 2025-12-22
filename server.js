// Force development mode
process.env.NODE_ENV = 'development';

module.exports = require('@strapi/strapi/lib').createStrapi();
