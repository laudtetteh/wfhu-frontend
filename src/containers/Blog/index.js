import React from "react";

import { Switch, Route } from "react-router-dom";

import { BlogNav } from "../../components/Nav";
import Posts from "../Posts";
import Post from "../Post";
import Category from "../Category";

export const Blog = () => {
    return (

        <React.Fragment>
            <div className="App">

                <BlogNav />

                <Switch>
                    <Route path="/" component={Posts} exact />
                    <Route path="/post/:id" component={Post} exact />
                    <Route path="/category/:id" component={Category} exact />
                </Switch>
            </div>
        </React.Fragment>
    );
}
