import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={POSTS_QUERY}>
            {({ data: { posts } }) => {
              return <Posts posts={posts} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
