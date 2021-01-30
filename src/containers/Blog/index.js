/*
* Blog Container
*
*/

// Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { BlogNav } from "../../components/Nav/blog";
import Page from "../../components/Page";
// Containers
import Posts from "../Posts";
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";


export const Blog = () => {

    return (

        <React.Fragment>

        <Query query={PAGES_QUERY} slug={"blog"}>
            {({ data: { pages } }) => {
              return <Page page={pages} />;
            }}
        </Query>

            <div className="App">

                <BlogNav />

                <section>
                    <Posts />
                </section>

            </div>

        </React.Fragment>
    );
}
