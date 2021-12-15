//Se llama al typedef (esquema) de cada submodulo

const authTypeDefs = require('./auth_type_defs');

const bookingTypeDefs = require('./booking_type_defs');
const canchaTypeDefs = require('./cancha_type_defs');

//Se unen

const schemasArrays = [authTypeDefs, bookingTypeDefs, canchaTypeDefs];

//Se exportan
module.exports = schemasArrays;