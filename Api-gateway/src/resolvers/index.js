const bookingResolver = require('./booking_resolver');
const canchaResolver = require('./cancha_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge( authResolver, bookingResolver, canchaResolver);

module.exports = resolvers;