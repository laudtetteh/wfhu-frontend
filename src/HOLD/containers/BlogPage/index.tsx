import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POST_QUERY from "../../queries/post/posts";

const Blog = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={POST_QUERY}>
            {({ data: { posts } }) => {
              return <Posts posts={posts} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Blog;
