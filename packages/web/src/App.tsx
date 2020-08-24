import React from "react";

import "./App.css";

import "./global.css";

import { Login } from "./pages/Login";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";

function App() {
  const link = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });

  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;
