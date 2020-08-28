import "reflect-metadata";
import "dotenv-safe/config";

import express from "express";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import session from "express-session";
import { UserResolver } from "./resolvers/user";
import { ChatResolver } from "./resolvers/chat";
import { MyContext } from "./types";
import {SocketServer} from "./socket";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    entities: ["./src/entities/*"],
    migrations: ["./src/migrations/*"],
    logging: false,
    synchronize: true,
    dropSchema: false
  });

  const app = express();

  const RedisStore = connectRedis(session);

  const redis = new Redis();

  new SocketServer(app);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redis,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
      },
      secret: process.env.SESSION_SECRET!,
      saveUninitialized: false,
      resave: false
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ChatResolver],
      validate: false,
      authChecker: ({ context: { req } }) => {
        return !!req.session.userId;
      }
    }),
    context: ({ req, res, redis }: MyContext) => ({
      req,
      res,
      redis
    })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main();
