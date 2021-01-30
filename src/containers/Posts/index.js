import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";

const GetPosts = ({limit}) => {

    return (

        <React.Fragment>

            <h1>Blog Posts</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Query query={POSTS_QUERY} limit={limit}>
                    {({ data: { posts } }) => {
                      return <Posts posts={posts} />;
                    }}
                </Query>
            </div>

        </React.Fragment>
    );
};

export default GetPosts;
