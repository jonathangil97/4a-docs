const fetch= require("node-fetch");
const {ApolloServer, gql} =require("apollo-server");

const typeDefs=gql`
    type Character{
        id: String
        name: String
        status: String

    } 

type Estudiante{
    id:String!
    nombre:String!
    apellido:String
}   
type Query{
    characters: [Character]
    estudiantes: [Estudiante]
}
`;
//characters es personajes, fetchCharacters funcion que va a tener todo el codigo para conectarnos a la pagina de Rick and morty
// yo quiero que me devuela el .json :
const resolvers={
    Query:{
    estudiantes:()=>fetchEstudiantes(),
    characters:()=>fetchCharacters(),   
    }
};

const server=new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`🚀  Servidor listo ${url}`);
});


function fetchCharacters(){
    return fetch("https://rickandmortyapi.com/api/character")
    .then(res=>res.json()).then(json=>json.result)
}

function fetchEstudiantes(){
    return fetch("http://localhost:8000/estudiantes/")
    .then(res=>res.json())
}
