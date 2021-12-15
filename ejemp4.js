const fetch= require("node-fetch");
const {ApolloServer, gql} =require("apollo-server");

const typeDefs=gql`
type Character{
    name:String
    status:String
    species:String
    origin:Origin
}
type Origin{
    name:String
    url:String
}
type Query{
    characters:[Character]
}
`;

const resolvers={
    Query:{
        characters:()=>fetchCharacters()
    }
};

const server=new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`🚀  Servidor listo ${url}`);
});

function fetchCharacters(){
    return fetch("https://rickandmortyapi.com/api/character")
    .then(res=>res.json())
    .then(json=>json.results);
}
