var express = require('express');
var {graphqlHTTP}= require('express-graphql');
var {buildSchema}= require('graphql');

var schema = buildSchema(`
type Query{

    hello:String
    }
`);

var root={
hello: ()=>{

    return 'Hello World';
},

};

var app= express('/graphql', graphqlHTTP({

    schema: schema,
    rootValue: root,
    graphiql: true,

}));

app.listen(12700);
console.log('Running GraphQL Server');