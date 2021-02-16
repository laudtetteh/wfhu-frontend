import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

export const BlogNav = () => {

    return (


            <Query query={CATEGORIES_QUERY} id={null}>

                {({ data: { categories } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 class="section-heading font-bellota text-4xl text-red text-left mb-8">Series</h2>

                            <ul className="loop-categories">
                                {categories.map((category, i) => {
                                    return (
                                    <li key={category.id}>

                                        <Link
                                            to={`/category/${category.slug}`}
                                            className="link-category">

                                            {category.name}

                                        </Link>
                                    </li>
                                );
                                })}
                            </ul>

                        </nav>
                    );
                }}
            </Query>
    );
};
