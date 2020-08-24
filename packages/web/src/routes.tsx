import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Chats from "./pages/Chats";
import { Login } from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Chats} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
