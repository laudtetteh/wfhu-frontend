/*
* Blog Container
*
*/
// Packages
import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { BlogNav } from "../../components/Nav/blog";
// Containers
import Posts from "../Posts";
// Queries
import Query from "../../components/Query";
import PAGES_QUERY from "../../queries/page/pages";

export const Blog = ({pageBag}) => {

    return (

        <React.Fragment>

            <div className="Blog">

                <BlogNav />

                <section>
                    <Posts limit={12}/>
                </section>

            </div>

        </React.Fragment>
    );
}
