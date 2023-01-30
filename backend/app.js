const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

// test the data 
let schema = buildSchema(`
    type Query {
        hello : String 
    }
`);

let root = {
    hello : ()=>{
        return "hello world";
    }
};

app.use('/graphql' , graphqlHTTP({
    schema : schema ,
    rootValue : root ,
    graphiql : true ,
}));

app.listen(3000 , ()=>{
    console.log(`app running on port : 3000`)
})