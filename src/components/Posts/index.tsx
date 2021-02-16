import React from "react";
import PostCard from "../Card/post";

const Posts = ({ posts, orientation }) => {
    const leftPostsCount = Math.ceil(posts.length / 5);
    const leftPosts = posts.slice(0, leftPostsCount);
    const rightPosts = posts.slice(leftPostsCount, posts.length);

    if(orientation == 'vertical') {
        return (
            <React.Fragment>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 posts-loop">
                    {leftPosts.map((post, index) => {
                        return <div key={index}> <PostCard post={post} key={`post-${post.id}`} orientation="vertical" /></div>
                    })}

                    {rightPosts.map((post, index) => {
                        return <div key={index}> <PostCard post={post} key={`post-${post.id}`} orientation="vertical" /></div>
                    })}
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 posts-loop">
                {leftPosts.map((post, index) => {
                    return <div key={index}> <PostCard post={post} key={`post-${post.id}`} orientation="horizontal" /></div>
                })}

                {rightPosts.map((post, index) => {
                    return <div key={index}> <PostCard post={post} key={`post-${post.id}`} orientation="horizontal" /></div>
                })}
            </div>
        </React.Fragment>
    );
};

export default Posts;
