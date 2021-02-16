import React from "react";
import PostCard from "../Card/post";

const Posts = ({ posts, orientation }) => {


    if(orientation == 'vertical') {
        return (
            <React.Fragment>
                <div className="grid-cols-1 md:grid-cols-3">

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
