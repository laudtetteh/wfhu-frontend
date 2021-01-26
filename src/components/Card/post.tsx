import React from "react";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

const Card = ({ post }) => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? post.image.url
  //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

  const imageUrl = post.image.formats.post_loop.url;

    return (
        <React.Fragment>
            <Link to={`/post/${post.id}`} className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img src={imageUrl} alt={imageUrl} height="100" />
                    </div>
                    <div className="uk-card-body">
                        <p id="name" className="uk-text-large">
                            Title: {post.name}
                        </p>
                    </div>
                </div>
            </Link>

            <Link to={`/category/${post.category.id}`}>

                <p id="category" className="uk-text-uppercase">
                    Category: {post.category.name}
                </p>

                <p id="published_at" className="uk-text-uppercase">
                    <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
                </p>

            </Link>
        </React.Fragment>
  );
};

export default Card;
