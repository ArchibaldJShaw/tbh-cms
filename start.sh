#!/bin/bash
export NODE_ENV=production
export STRAPI_DISABLE_ADMIN_PANEL_PRODUCTION_CHECK=true
npm run start:prod
