// Packages
import React from "react";
// Components
import { Posts } from "../../components/Posts";
import { Query } from "../../components/Query";
// Queries
import { POSTS_QUERY } from "../../queries/post/posts";

export const GetPosts = props => {

    return (

        <React.Fragment>

            <Query query={POSTS_QUERY} limit={props.limit}>

                {({ data: { posts } }) => {

                    return <Posts
                        posts={posts}
                        orientation={props.orientation}
                        heading={props.heading}
                        nameClasses={props.nameClasses}
                        dateClasses={props.dateClasses}
                    />;

                }}

            </Query>

        </React.Fragment>
    );
};
