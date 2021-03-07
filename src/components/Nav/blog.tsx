// Packages
import React from "react";
import { Link } from "react-router-dom";
// Components
import { Card } from "../Card/post";
// Queries
import { Query } from "../Query";
import { POSTS_QUERY } from "../../queries";
import { CATEGORY_POSTS_QUERY } from "../../queries";
import { CATEGORIES_QUERY } from "../../queries";

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

                                        <li key={post.id} className="mb-10">
                                            <Card
                                                post={post}
                                                key={`post-${post.id}`}
                                                orientation="horizontal"
                                                nameClasses={props.nameClasses}
                                                dateClasses={props.dateClasses}
                                            />
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

                                        <li key={category.id} className="mb-5">

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
