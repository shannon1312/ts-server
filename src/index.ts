// import "reflect-metadata";
// import { GraphQLServer } from 'graphql-yoga'
// import { createConnection } from 'typeorm';
// import { ResolverMap } from "./types/ResolverType";
// import { User } from "./entity/User";
// // ... or using `require()`
// // const { GraphQLServer } = require('graphql-yoga')

// const typeDefs = `
//   type User {
//     id: Int!
//     email: String!
//     nikename:String!
//     password:String!
//   }
//   type UserProfile {

//   }
//   type Query {
//     hello(name: String): String!
//     user(id:Int!):User!
//     users:[User!]!
//   }
//   type Mutation{
//     createUser(email:String!,name:String!,age:Int!):User!
//     updateUser(id:Int!,email:String,age:Int):Boolean
//     deleteUser(id:Int!):Boolean
//   }
// `

// const resolvers: ResolverMap = {
//   Query: {
//     hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
//     user: (_, { id }) => User.findOne(id),
//     users: () => User.find()
//   },
//   Mutation: {
//     createUser: (_, args) => User.create(args).save(),
//     updateUser: async (_, { id, ...args }) => {
//       try {
//         await User.update(id, args);
//         return true;
//       } catch (err) {
//         console.log(err)
//         return false;
//       }
//     },
//     deleteUser: async (_, { id }) => {
//       try {
//         await User.remove(id);
//         return true
//       } catch (err) {
//         console.log(err)
//         return false
//       }
//     }
//   }
// }

// const server = new GraphQLServer({ typeDefs, resolvers })

// createConnection().then( ()=> {
//   server.start(() => console.log('Server is running on localhost:4000'))
// }).catch(err=>console.log(err))