import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import POST_QUERY from "../../queries/post/post";

const Post = () => {
  let { id } = useParams();
  return (
    <Query query={POST_QUERY} id={id}>
      {({ data: { post } }) => {

        // const imageUrl =
        //   process.env.NODE_ENV !== "development"
        //     ? post.image.url
        //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

        const imageUrl = post.image.url;

        return (
          <div>
            <div className="uk-card-media-top">
              <img src={imageUrl} alt={post.image.url} height="100" />
              <h1>{post.name}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={post.description} />
                <p>
                  <Moment format="MMM Do YYYY">{post.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Post;
