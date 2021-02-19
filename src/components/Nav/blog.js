// Packages
import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
// Queries
import CATEGORY_POSTS_QUERY from "../../queries/category/posts";
import CATEGORIES_QUERY from "../../queries/category/categories";

export const BlogNav = () => {

    return (


            <Query query={CATEGORIES_QUERY} id={null}>

                {({ data: { categories } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Series</h2>

                            <ul className="loop-categories font-roboto text-base text-black font-medium">

                                {categories.map((category, i) => {

                                    return (

                                        <li key={category.id} className="mb-3">

                                            <Link
                                                to={`/category/${category.slug}`}
                                                className="link-category">

                                                <p className="">{category.name}</p>

                                            </Link>

                                            <Query query={CATEGORY_POSTS_QUERY} slug={category.slug}>

                                                {({ data: { categories } }) => {

                                                    return (
                                                        <p className="post-category-postcount font-roboto text-xs text-black font-thin italic">{categories[0].posts.length} Posts</p>
                                                    );
                                                }}
                                            </Query>

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
