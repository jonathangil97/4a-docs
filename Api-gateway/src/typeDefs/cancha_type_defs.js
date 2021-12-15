const { gql } = require('apollo-server');

const canchaTypeDefs = gql `
    type Cancha {
        id: String!
        nombre: String!
        direccion: String!
        ubicacion: String!
        cantidad_jugadores: String!
        propietario: String!
        precio: String!

    }

    input CanchaInput {
        nombre: String!
        direccion: String!
        ubicacion: String!
        cantidad_jugadores: String!
        propietario: String!
        precio: String!
    }

    extend type Query {
        canchaByNombre(nombre: String!): [Cancha]
    }

    extend type Mutation {
        createCancha(cancha: CanchaInput!): Cancha
    }

    extend type Mutation {
        removeCanchaBynombre(nombre: CanchaInput!): Cancha
    }
`;
module.exports = canchaTypeDefs;