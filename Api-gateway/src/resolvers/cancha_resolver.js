const canchaResolver = {
    Query: {
        canchaByNombre: async(_, { nombre }, { dataSources }) => {
            return dataSources.CanchaAPI.getCancha(nombre)

        }
    },
    Mutation: {
        createCancha: async(_, { cancha }, { dataSources }) => {
            const inputCancha = {
                id: cancha.id, 
                nombre: cancha.nombre,
                direccion: cancha.direccion,
                ubicacion: cancha.ubicacion,
                cantidad_jugadores: cancha.cantidad_jugadores,
                propietario: cancha.propietario,
                precio: cancha.precio,

        }        
        return dataSources.CanchaAPI.createCancha(cancha)

        
    }
}

};

module.exports = canchaResolver;