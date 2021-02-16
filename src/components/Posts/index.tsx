import React from "react";
import PostCard from "../Card/post";

const Posts = ({ posts, orientation }) => {

    if(orientation == 'vertical') {
        return (
            <React.Fragment>

                <div className="col-span-5 space-y-6">

                    <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Posts</h2>

                    {posts.map((post, index) => {
                        return <PostCard key={index} post={post} key={`post-${post.id}`} orientation="vertical" />
                    })}

                </div>

            </React.Fragment>
        );
    }

    return (
        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 posts-loop">
                {posts.map((post, index) => {
                    return <PostCard key={index} post={post} key={`post-${post.id}`} orientation="horizontal" />
                })}

            </div>

        </React.Fragment>
    );
};

export default Posts;
