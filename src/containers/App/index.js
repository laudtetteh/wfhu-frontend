import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Posts from "../Posts";
import Post from "../Post";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/post/:id" component={Post} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
