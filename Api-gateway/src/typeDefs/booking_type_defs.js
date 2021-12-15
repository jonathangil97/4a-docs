const { gql } = require('apollo-server');

const bookingTypeDefs = gql `
    type Booking {
        id: String!
        fecha_hora: String!
        nombre_persona: String!
        cancha: String!
        username: String!
        tiempo_reserva: String!
        tipo_pago: String!
        arbitraje: String!
        hidratacion: String!
        uniformes: String!
    }

    input BookingInput {
        fecha_hora: String!
        nombre_persona: String!
        cancha: String!
        username: String!
        tiempo_reserva: String!
        tipo_pago: String!
        arbitraje: String!
        hidratacion: String!
        uniformes: String!
    }

    extend type Query {
        bookingByUsername(username: String!): [Booking]
    }

    extend type Mutation {
        createBooking(booking: BookingInput!): Booking
    }
`;
module.exports = bookingTypeDefs;