import "reflect-metadata";
import "dotenv-safe/config";

import express from "express";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import { ApolloServer } from "apollo-server-express";
import {User} from "./entities/User";
import {Chat} from "./entities/Chat";
import {ChatResolver} from "./resolvers/chat";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    entities: [User, Chat],
    migrations: ["./src/migrations/*"],
    synchronize: process.env.ENV !== "production",
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ChatResolver],
      validate: false
    })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main();
