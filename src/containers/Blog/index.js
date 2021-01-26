/*
* Blog Container
*
*/

// Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { BlogNav } from "../../components/Nav/blog";
// Containers
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
