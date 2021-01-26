import React from "react";
import { useParams } from "react-router";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import CATEGORY_POSTS_QUERY from "../../queries/category/posts";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_POSTS_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Posts posts={category.posts} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;
