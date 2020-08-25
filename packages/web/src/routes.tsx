import React from "react";
import {gql, useQuery} from "@apollo/client";

import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Chats from "./pages/Chats";
import Home from "./pages/Home";

const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

const PrivateRoute = ({ path, component }: any) => {
  const { data, loading } = useQuery(ME);

  if (loading) return null;

  const isAuth = () => {
    return !!data.me;
  }

  return (
    <>
      {
        isAuth() ?
          <Route path={path} component={component} /> :
          <Redirect to="/login" />
      }
    </>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <PrivateRoute path="/chats" component={Chats} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
