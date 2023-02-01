const {
    GraphQLObjectType , 
    GraphQLSchema ,
    GraphQLString , 
    GraphQLInt ,
} = require('graphql');
const lod = require('lodash') ;

const lessons = [
    {id : "1" , name : 'reactJS' , group : 'front' , teacherId : '1'},
    {id : "2" , name : 'expressJS' , group : 'back' , teacherId : '2'},
    {id : "3" , name : 'NestJS' , group : 'back' , teacherId : '1'},
    {id : "4" , name : 'vue' , group : 'front' , teacherId : '2'},
]

const teachers = [
    {id : '1' , name : "MohamadMirzaei" , email : "mohamad@gmail.com" , age : 19},
    {id : '2' , name : "MiladMirzaei" , email : "milad@gmail.com" , age : 17},
]

const lessonType = new GraphQLObjectType({
    name : 'lession' , 
    fields : ()=>({
        id : {type : GraphQLString},
        name : {type : GraphQLString} ,
        group : {type : GraphQLString},
        teacher : {
            type : teacherType ,
            resolve(parent , args){
                return lod.find(teachers , {id : parent.teacherId});
            }
        }
    }) 
});

const teacherType = new GraphQLObjectType({
    name : "teacher" , 
    fields : {
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        email : {type : GraphQLString},
        age : {type : GraphQLInt}
    }
})


const rootQuery = new GraphQLObjectType({
    name : 'rootQueryType' ,
    fields : {
        lesson : {
            type : lessonType , 
            args : {id : {type : GraphQLString}},
            resolve(parent , args){
                return lod.find(lessons , {id : args.id}) 
            }
        } ,
        teacher : {
            type : teacherType , 
            args : {id : {type : GraphQLString}},
            resolve(parent , args){
                return lod.find(teachers , {id : args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({query : rootQuery});