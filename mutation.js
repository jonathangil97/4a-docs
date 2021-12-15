var express = require('express');
var {graphqlHTTP}= require('express-graphql');
var {buildSchema} = require('graphql');       


// eSTRUCTURA DEL INPUT Y ESTRUCTURA DEL MENSAJE:
var schema = buildSchema(`  
input Messageinput{        
    content:String
    author:String
  }
  type Message{
      id: ID!
      content:String
      author:String 
  }
  type Query{
    getMessage(id: ID!): Message
  }
  type Mutation{
      createMessage(input: Messageinput): Message
      updateMessage(id: ID!, input: Messageinput): Message
  }
`);

class Message {
    constructor(id, {content, author}){
        this.id=id;
        this.content=content;
        this.author=author;
    }
}
var fakeDatabase= {};
// crear los resorlver o los root que es lo mismo
var root ={
    getMessage:({id})=>{
        if (!fakeDatabase[id]){
            throw new Error('no existe'+id)
        }
        return new Message(id, fakeDatabase[id])
    }, 
    createMessage:({input})=>{
        var id = require('crypto').randomBytes(10).toString('hex');
        fakeDatabase[id]= input; 
        return new Message(id, input);
    },
    updateMessage:({id, input})=>{
        if (!fakeDatabase[id]){
            throw new Error('no existe'+id)
        }
        fakeDatabase[id]= input; 
        return new Message(id, input);
    },
};

var app= express();
app.use('/graphql',graphqlHTTP({
      schema:schema,
      rootValue:root,
      graphiql:true,     
}));

app.listen(4000, ()=>{
    console.log('Running a GraphQL API server at http://localhost:4000/graphql') 
});


