import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";

const GetPosts = ({limit, orientation}) => {

    return (

        <React.Fragment>

            <Query query={POSTS_QUERY} limit={limit}>
                {({ data: { posts } }) => {
                    return <Posts posts={posts} orientation={orientation}/>;
                }}
            </Query>

        </React.Fragment>
    );
};

export default GetPosts;
