import { ApolloServer, gql } from "apollo-server";
import { importSchema } from "graphql-import";
import { User } from "./entity/User";
import * as types from "./types";
import { ResolverMap } from "./types/ResolverType";
import { createConnection } from "typeorm";
import { UserProfile } from "./entity/UserProfile";
import * as path from "path";
import bcrypt = require("bcryptjs");

const SALT = 8;

const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: types.HelloQueryArgs) => `Hello ${name || "World"}`,
    user: async (_, { id }: types.UserQueryArgs) => {
      const res = await UserProfile.findOne(id);
      return res;
    },
    users: async () => {
      const res = await UserProfile.find();
      return res;
    }
  },
  Mutation: {
    createUser: async (_, args: types.CreateUserMutationArgs) => {
      const password = await bcrypt.hash(args.user.password, SALT);
      args.user.password = password;
      const user = await User.create({ ...args.user }).save();
      const res = await UserProfile.create({
        user,
        ...args.profile
      }).save();
      return res;
    }
  }
};

const typeDefs = gql(importSchema(path.join(__dirname, "./schema.graphql")));

const server = new ApolloServer({ typeDefs, resolvers });

createConnection()
  .then(async () => {
    const serverInfo = await server.listen();
    console.log(`server running on ${serverInfo.port}`);
  })
  .catch(err => console.log(err));
