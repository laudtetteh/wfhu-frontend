import React from "react";
import Card from "../Card/post";

const Posts = ({ posts }) => {
    const leftPostsCount = Math.ceil(posts.length / 5);
    const leftPosts = posts.slice(0, leftPostsCount);
    const rightPosts = posts.slice(leftPostsCount, posts.length);

    return (
        <React.Fragment>
            {leftPosts.map((post, index) => {
                return <div key={index}> <Card post={post} key={`post__${post.id}`} /></div>
            })}

            {rightPosts.map((post, index) => {
                return <div key={index}> <Card post={post} key={`post__${post.id}`} /></div>
            })}
        </React.Fragment>
    );
};

export default Posts;
