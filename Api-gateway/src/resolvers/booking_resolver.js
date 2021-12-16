const bookingResolver = {
    Query: {
        bookingByUsername: async(_, { username }, { dataSources }) => {
            return dataSources.BookingAPI.bookingByUsername(username)

        }
    },
    Mutation: {
        createBooking: async(_, { booking }, { dataSources }) => {
            const inputBooking = {
                id: booking.id, 
                fecha_hora: booking.fecha_hora,
                nombre_persona: booking.nombre_persona,
                cancha: booking.cancha,
                username: booking.username,
                tiempo_reserva: booking.tiempo_reserva,
                tipo_pago: booking.tipo_pago,
                arbitraje: booking.arbitraje,
                hidratacion: booking.hidratacion,
                uniformes: booking.uniformes,
        }        
        return dataSources.BookingAPI.createBooking(booking)

        
    }
}

};

module.exports = bookingResolver;