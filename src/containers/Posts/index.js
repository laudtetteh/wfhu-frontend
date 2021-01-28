import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";

const Home = () => {

    return (

        <React.Fragment>

            <h1>Blog Posts</h1>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Query query={POSTS_QUERY}>
                    {({ data: { posts } }) => {
                      return <Posts posts={posts} />;
                    }}
                </Query>
            </div>

        </React.Fragment>
    );
};

export default Home;
