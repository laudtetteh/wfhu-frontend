import React from "react";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

const Card = ({ post }) => {

    // const imageUrl =
    //     process.env.NODE_ENV !== "development"
    //     ? post.image.url
    //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

    const imageUrl = post.image.formats.post_loop.url;

    return (
        <React.Fragment>

            <Link to={`/post/${post.id}`} className="post-card--image">
                <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
            </Link>


            <Link to={`/post/${post.id}`} className="post-card--title no-underline">
                <p id="name" className="font-roboto text-lg text-yellow">
                    {post.name}
                </p>
            </Link>


            <p id="" className="post-card--date text-xs text-gray-light italic">
                <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
            </p>

        </React.Fragment>
    );
};

export default Card;
