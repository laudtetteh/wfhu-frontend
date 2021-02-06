import React from "react";
import PostCard from "../Card/post";

const Posts = ({ posts }) => {
    const leftPostsCount = Math.ceil(posts.length / 5);
    const leftPosts = posts.slice(0, leftPostsCount);
    const rightPosts = posts.slice(leftPostsCount, posts.length);

    return (
        <React.Fragment>
            {leftPosts.map((post, index) => {
                return <div key={index}> <PostCard post={post} key={`post__${post.id}`} /></div>
            })}

            {rightPosts.map((post, index) => {
                return <div key={index}> <PostCard post={post} key={`post__${post.id}`} /></div>
            })}
        </React.Fragment>
    );
};

export default Posts;
