const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

// test the data 
let schema = buildSchema(`
    type Query {
        hello : String 
        random : Float
    }
`);

let root = {
    hello : ()=>{
        return "hello world";
    } ,

    random : ()=>{
        return Math.random(Math.floor * 8)
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