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
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";

export const Blog = ({pageLoad}) => {
// console.log(pageLoad);
const _no_of_posts = pageLoad.dynamic_fields[0].no_of_posts;

    return (

        <React.Fragment>

            <div className="Blog">

                <BlogNav />

                <section>
                    <Posts limit={_no_of_posts}/>
                </section>

            </div>

        </React.Fragment>
    );
}
