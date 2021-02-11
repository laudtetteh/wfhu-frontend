import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";

const GetPosts = ({limit}) => {

    return (

        <React.Fragment>

            <div className="container mx-auto py-10">

                <h2 className="section-heading font-bellota text-4xl text-white mb-3">
                    Blog Posts
                    <a href="/blog" className="link-all font-roboto text-base text-yellow underline pl-3">All Posts</a>
                </h2>

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
