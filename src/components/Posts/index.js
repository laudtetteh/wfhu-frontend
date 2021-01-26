import React from "react";
import Card from "../Card/post";

const Posts = ({ posts }) => {
    const leftPostsCount = Math.ceil(posts.length / 5);
    const leftPosts = posts.slice(0, leftPostsCount);
    const rightPosts = posts.slice(leftPostsCount, posts.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftPosts.map((post, i) => {
                        return <Card post={post} key={`post__${post.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightPosts.map((post, i) => {
                            return <Card post={post} key={`post__${post.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
