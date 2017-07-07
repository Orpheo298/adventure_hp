var angular = require('angular');
require('angular-mocks');

const context = require.context('./app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
