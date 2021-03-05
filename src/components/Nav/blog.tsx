// Packages
import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
// Components
import { Card } from "../Card/post";
// Queries
import POSTS_QUERY from "../../queries/post/posts";
import CATEGORY_POSTS_QUERY from "../../queries/category/posts";
import CATEGORIES_QUERY from "../../queries/category/categories";

export const BlogNav = props => {

    return (

        <React.Fragment>

        { props.more_posts &&

            <Query
                query={POSTS_QUERY}
                id={null}
                exclude={props.exclude}
                sort="publishedAT:ASC">

                {({ data: { posts } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 className="section-heading font-bellota text-3xl text-red text-left mb-5">More Posts</h2>

                            <ul className="loop-posts font-roboto text-base text-black font-medium">

                                {posts.map((post) => {

                                    return (

                                        <li key={post.id} className="mb-3">
                                            <Link
                                                to={`/post/${post.slug}`}
                                                className="link-event">

                                                <Card post={post} key={`post-${post.id}`} orientation="horizontal" />

                                            </Link>
                                        </li>
                                    );

                                })}
                            </ul>

                        </nav>
                    );
                }}
            </Query>
        }

            <Query query={CATEGORIES_QUERY} id={null}>

                {({ data: { categories } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 className="section-heading font-bellota text-3xl text-red text-left mb-5">Categories</h2>

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

        </React.Fragment>
    );
};
