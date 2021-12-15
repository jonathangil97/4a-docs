const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const BookingAPI = require('./dataSources/booking_api');
const CanchaAPI = require('./dataSources/cancha_api');

const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        bookingAPI: new BookingAPI(),
        canchaAPI: new CanchaAPI(),
        authAPI: new AuthAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});