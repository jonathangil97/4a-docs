const fetch= require("node-fetch");
const {ApolloServer, gql} =require("apollo-server");
const estudiantes= [{"id": "61984310313fe92b560c453e", "nombre": "Diegor", "apellido": "Ríos", "email": "Josue1@unal.edu.co", "direccion": {"pais": "  Colombia "," ciudad ":" Abejorral "," numeroDireccion ":" 14-78 "}," informeNotas ": {" nota1 ":" 5 "," nota2 ":" 4 "," nota3 ":" 5  "}," carnet ": {" foto ":" foto "," grado ":" 10 "," ie ":" Industrial "}}, {" id ":" 619c3be28047776ab5118588 "," nombre ":" Josué  "," apellido ":" Ríos "," email ":" andres@unal.edu.co "," direccion ": {" pais ":" Colombia "," ciudad ":" Bogotá "," numeroDireccion ":"  14-78 "}," informeNotas ": {" nota1 ":" 5 "," nota2 ":" 4 "," nota3 ":" 5  "}," carnet ": {" foto ":" foto "," grado ":" 10 "," ie ":" Industrial "}}]

const typeDefs = gql`
    type Estudiante{
        nombre: String!
        apellido: String!
    }
    type Query{                    
        estudiantes:[Estudiante]    
    } 
`;

const resolvers = {
    Query:{
        estudiantes:()=>estudiantes,  
    },
};

const server = new ApolloServer({typeDefs, resolvers}); 

server.listen().then(({url})=>{
    console.log(`🚀  Servidor listo ${url}`);
});