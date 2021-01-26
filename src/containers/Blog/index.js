import React from "react";
import { Switch, Route } from "react-router-dom";
import { BlogNav } from "../../components/Nav/blog";
import Posts from "../Posts";

export const Blog = () => {

    return (

        <React.Fragment>

            <div className="App">

                <BlogNav />

                <section>
                    <Posts />
                </section>

            </div>

        </React.Fragment>
    );
}
