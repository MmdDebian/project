const graphql = require('graphql');


const {
    GraphQLObjectType , 
    GraphQLString
} = graphql ;


const LessionType = new GraphQLObjectType({
    name : 'Lession' , 
    fields : ()=>({
        id : {type : GraphQLString},
        name : {type : GraphQLString} ,
        group : {type : GraphQLString},
    }) 
});



const rootQuery = new GraphQLObjectType()