import React from "react";

import "./App.css";

import "./global.css";

import "./tailwind.output.css";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";

import Routes from "./routes";

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
      <Routes />
    </ApolloProvider>
  );
}

export default App;
