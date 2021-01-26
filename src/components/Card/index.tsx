import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {

  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? post.image.url
  //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

    const imageUrl = post.image.url;

    return (
        <React.Fragment>
            <Link to={`/post/${post.id}`} className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img src={imageUrl} alt={post.image.url} height="100" />
                    </div>
                    <div className="uk-card-body">
                        <p id="name" className="uk-text-large">
                            {post.name}
                        </p>
                    </div>
                </div>
            </Link>

            <Link to={`/category/${post.category.id}`}>
                <p id="category" className="uk-text-uppercase">
                    {post.category.name}
                </p>
            </Link>
        </React.Fragment>
  );
};

export default Card;
